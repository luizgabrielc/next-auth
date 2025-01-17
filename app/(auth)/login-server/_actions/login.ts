"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

export default async function login(FormData: FormData) {
  const { email, password } = Object.fromEntries(FormData.entries());

  try {
    await signIn("credentials", {redirectTo: '/dashboard', email, password });
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type === "CredentialsSignin") {
        e.message = "Credenciais Inválidas";
        throw e;
      }
    }
  }

  redirect("/dashboard");
}
