"use client";
import { SignInButton, SignOutButton } from "@/app/components/buttons";
import React from "react";
import { signIn } from "next-auth/react";

const Login = (props) => {
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: "user_email@email.com",
      password: "user_password",
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div>
      <h1 className="text-xl text-amber-500	">Credentials</h1>
      <button onClick={() => onSubmit()}>
        Login button but tailwind f-ed it
      </button>
    </div>
  );
};

export default Login;
