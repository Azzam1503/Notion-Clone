"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { z } from "zod";

const SingupFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Passwod")
      .min(6, "Password must be minimum of 6 characters"),
    confrimPassword: z
      .string()
      .describe("Confirm Passwod")
      .min(6, "Password must be minimum of 6 characters"),
  })
  .refine((data) => data.password === data.confrimPassword, {
    message: "Password do not match",
  });

const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const constExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const confirmationAndErrorStyles = useMemo(() => {
    clsx("bg-primary", {
      "bg-red-500/10": constExchangeError,
      "border-red-500/50": constExchangeError,
      "text-red-700": constExchangeError,
    });
  }, []);

  const form = useForm<z.infer<typeof SingupFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(SingupFormSchema),
    defaultValues: { email: "", password: "", confrimPassword: "" },
  });

  const onSubmit = () => {};

  const signupHandler = () => {};

  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) setSubmitError("");
        }}
        onSubmit={form.handleSubmit(onSubmit)}
      ></form>
    </Form>
  );
};

export default Signup;
