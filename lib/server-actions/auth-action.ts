"use server";
import {z} from 'zod';
import { FormSchema } from '../type';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import {cookies} from "next/headers";

type User = z.infer<typeof FormSchema>

export async function actionLoginUser({email, password}: User){
    const supabase = createRouteHandlerClient({ cookies });
    const response = await supabase.auth.signInWithPassword({
        email, password
    });

    return response;
}

export async function  actionSingupUser({email, password}: User){
    const supabase = createRouteHandlerClient({cookies});

    const {data} = await supabase.from('profiles').select("*").eq('email', email);

    if(data?.length) return {error: {message: "User already exist"}};

    const response = await supabase.auth.signUp({email, password, options:{
        emailRedirectTo: `${process.env.NEXT_SITE_URL}api/auth/callback`
    }});

    return response;
}