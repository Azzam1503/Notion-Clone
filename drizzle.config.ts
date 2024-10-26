import type { Config} from "drizzle-kit";
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});

if(!process.env.DATABASE_URL){
    console.log("Cannot find database url");
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: "./migartions",
    drivers: "pg",
    dbCredentials:  {
        // @ts-ignore
        connectionString: process.env.DATABASE_URL || '',
    },
} satisfies Config;