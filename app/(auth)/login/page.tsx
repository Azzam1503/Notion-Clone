"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/type";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/cypresslogo.svg";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import { actionLoginUser } from "@/lib/server-actions/auth-action";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    const { error } = await actionLoginUser(formData);
    if (error) {
      form.reset();
      setSubmitError(error.message);
    }

    router.replace("/dashboard");
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center sm:w-[400px] space-y-6 flex flex-col"
        onChange={() => {
          if (setSubmitError) setSubmitError("");
        }}
      >
        <Link href="" className="w-full flex justify-left items-center">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <span className="font-semibold dark:text-white text-4xl ml-2">
            Login
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An All-In-One Collabration and Productivity Platform
        </FormDescription>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="email" {...field}></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        <FormField
          disabled={isLoading}
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder="password"
                  {...field}
                ></Input>
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        ></FormField>
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button
          type="submit"
          className="w-full p-6"
          size={"lg"}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Login"}
        </Button>
        <span className="self-center">
          Don't have an account?
          <Link href="/signup" className="text-primary p-2">
            Singup
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
