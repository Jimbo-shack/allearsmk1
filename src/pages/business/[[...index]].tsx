import React from "react";
import BackGroundRadar from "../backGroundRadar";
import Targets from "../targets";
import Header from "../Header";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  SignUp,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

function Business() {
  const user = useUser();

  return (
    <main className=" flex h-screen flex-col items-center scroll-smooth bg-header bg-cover bg-center bg-no-repeat text-white antialiased selection:bg-redPrimary selection:text-background">
      <BackGroundRadar />
      <Targets />
      <Header />
      <div className="container z-10 flex animate-textFadeTwo flex-col items-center justify-center gap-12 px-4">
        <h1 className=" mt-16 text-center text-8xl font-bold text-white">
          ALL EARS
        </h1>
        <div className=" bg-gradient-to-b from-white to-white/40 bg-clip-text py-4">
          <h2 className="text-center text-6xl font-bold text-transparent">
            On the mark user feedback
          </h2>
          <h2 className="mt-5 text-center text-5xl font-bold text-transparent">
            without the noise
          </h2>
        </div>
        <Link
          href="/signup"
          id="Sign up button"
          className="rounded-full bg-white py-2 px-10 text-xl font-bold text-header hover:bg-stone-200"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}

export default Business;
