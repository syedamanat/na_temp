"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === "loading") {
    return <>...</>;
  }

  if (status === "authenticated") {
    return <Link href={"/dashboard"}>dashboard</Link>;
  }

  return <button onClick={() => signIn()}></button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
