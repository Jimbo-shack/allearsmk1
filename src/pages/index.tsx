import React from "react";
import BackGroundRadar from "./backGroundRadar";
import Targets from "./targets";
import Header from "./Header";
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
    <main className="flex flex-col items-center scroll-smooth bg-header text-white antialiased selection:bg-redPrimary selection:text-backgroundold">
      <section className="flex h-screen w-full flex-col items-center overflow-hidden antialiased">
        <BackGroundRadar />
        <Targets />
        <Header />
        <div className="container z-10 mx-auto flex animate-textFadeTwo flex-col items-center justify-center gap-6 px-4">
          <h1 className=" mt-16 text-center text-8xl font-bold text-white">
            ALL EARS
          </h1>
          <div className=" bg-gradient-to-b from-white to-white/40 bg-clip-text py-4 pt-8">
            <h2 className="text-center text-6xl font-bold text-transparent">
              Your company sucks at hearing feedback
            </h2>
            <h2 className="mt-5 text-center text-5xl font-bold text-transparent">
              We make it a breeze
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
      </section>
      <section className="h-screen w-full bg-[#020617] py-24">
        <h1 className="bg-gradient-to-b from-white/90 to-white/50 bg-clip-text py-2 text-center text-6xl font-bold text-transparent">
          Social media feedback made easy
        </h1>
        <div className="grid h-full w-full grid-cols-4 gap-5 px-32 py-16">
          <div className=" col-span-3 row-span-2 rounded-md bg-orange-400 p-5 px-8">
            <h1 className="text-6xl font-medium">
              Get on the mark feedback strait to the point.
            </h1>
            <p>Image to come</p>
          </div>
          <div className="rounded-md bg-[#F5013A] p-5">
            <h1 className=" text-2xl font-medium">
              Hear your users voice on every platform.
            </h1>
            <p>graphic to come</p>
          </div>
          <div className=" rounded-md bg-slate-50 p-5">
            <h1 className=" text-2xl font-medium text-[#020617]">
              Automatic sorting of issues based on type.
            </h1>
            <p>graphic to come</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Business;
