import React from "react";
import Link from "next/link";

import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { useRouter } from "next/router";

function Header() {
  const user = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <header className=" sticky top-0 z-50 flex h-full w-full">
      <div className=" flex flex-col justify-between">
        <div className="flex flex-col text-slate-900">
          <div className=" mx-auto p-5 px-20">
            <h1 className="whitespace-nowrap text-xl font-bold text-redPrimary">
              ALL EARS
            </h1>
          </div>
          <div className="flex flex-col gap-12 px-8">
            <div>
              {/* <div className="flex gap-6">
            <Link href="/" className=" text-slate-400">
              Favourites
            </Link>
            <Link href="/" className=" text-slate-400/50">
              Recently
            </Link>
          </div> */}
              <ul className="flex list-inside list-disc flex-col gap-1 pt-2 text-slate-300">
                <li>
                  <Link href="/" className="text-slate-900">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-slate-900">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-light text-slate-400">Dashboards</h1>
              <ul className="flex list-inside flex-col gap-2 pt-2 text-slate-900">
                <li
                  className={
                    currentPath === "/dashboard/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : "rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Overview</Link>
                </li>
                <li
                  className={
                    currentPath === "/dashboard/services /[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Products & Services</Link>
                </li>
                <li
                  className={
                    currentPath === "/dashboard/usersattention/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">User Attention</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-light text-slate-400">System</h1>
              <ul className="flex list-inside flex-col gap-2 px-3 pt-2">
                <li
                  className={
                    currentPath === "/dashboard/collection/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Collection</Link>
                </li>
                <li
                  className={
                    currentPath === "/dashboard/structure/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Internal Structure</Link>
                </li>
                {/* <li
                  className={
                    currentPath === "/dashboard/account/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">User groups</Link>
                </li> */}
                <li
                  className={
                    currentPath === "/dashboard/routes/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Routes</Link>
                </li>
                <li
                  className={
                    currentPath === "/dashboard/targets/[[...index]]"
                      ? "rounded-md border-l-4 border-slate-800 bg-slate-200 px-3"
                      : " rounded-md px-3 hover:bg-slate-200/75"
                  }
                >
                  <Link href="/">Targets</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" p-5 px-8">
          <div className="flex gap-2">
            <UserButton
              appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
            />
            <div className="my-auto">
              <h1 className=" ">{user.user?.fullName}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
