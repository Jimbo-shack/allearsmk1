import React from "react";
import Link from "next/link";
import { SignInButton, SignOutButton, SignUp, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";

function Header() {
  const user = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className=" sticky top-0 z-50 w-full">
      <div className="mx-auto w-9/12 py-5">
        <div className=" align flex grow align-middle font-bold text-white ">
          <div className="grow">
            <Link className=" text-xl hover:text-redPrimary" href="/">
              ALL EARS
            </Link>
          </div>
          <div className=" align my-auto flex align-middle">
            <div className=" flex cursor-pointer rounded-3xl px-5 py-1 outline outline-1 outline-white hover:text-redPrimary hover:outline-redPrimary ">
              {!user.isSignedIn && <SignInButton />}
              {!!user.isSignedIn && <Link href="/dashboard">Dashboard</Link>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
