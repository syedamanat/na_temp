import Image from "next/image";
import { SignInButton } from "./components/buttons";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  let message = "";
  if (session) {
    console.log(session);
    redirect("/dashboard", "replace");
  }
  return (
    <div>
      <h1 className="text-xl text-amber-500	">Login</h1>
      <br />
      <SignInButton /> <br />
    </div>
  );
}
