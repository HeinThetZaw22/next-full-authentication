import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex h-full flex-col items-center justify-center">
      <div className=" space-y-6 flex max-w-lg flex-col border border-gray-100 items-center justify-center rounded-md px-5 py-10 shadow-md text-center">
        <Image src={"/profile.png"} width={120} className=" rounded-full object-cover" height={120} alt="profile" />
        <h1>My Next Authenication Service</h1>
        <p className=" text-sm text-gray-500">
          Login and test two-factor auth, reset password and role-based access in setting
        </p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
