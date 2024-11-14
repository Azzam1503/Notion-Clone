"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/lib/type";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/cypresslogo.svg";

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
  ) => {};
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
      </form>
    </Form>
  );
};

export default LoginPage;
