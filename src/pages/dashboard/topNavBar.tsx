import React from "react";
import Link from "next/link";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

function TopNavBar() {
  const user = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className=" flex h-14 w-full grow border-b border-slate-200 text-slate-900">
      <div className=" ml-auto"></div>
    </div>
  );
}

export default TopNavBar;
