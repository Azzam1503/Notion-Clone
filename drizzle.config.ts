import  { defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});

if(!process.env.DATABASE_URL){
    console.log("Cannot find database url");
}
export default defineConfig({
    out: "./migrations",
    schema: "./lib/supabase/schema.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
        database: "postgres",
        port: 5432,
        host: "aws-0-ap-south-1.pooler.supabase.com",
        user: process.env.DATABASE_USER,
        password: process.env.PW,
    },
    schemaFilter: ['public'],
})