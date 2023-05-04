// import { withClerkMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

// export default withClerkMiddleware(() => {
//   return NextResponse.next();
// });

// // Stop Middleware running on static files
// export const config = {
//   matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
// };

import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Set the paths that don't require the user to be signed in
const publicPaths = ["/", "/signin*", "/signup*"];

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
};

export default withClerkMiddleware((request: NextRequest) => {
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(request);

  if (!userId) {
    // redirect the users to /pages/sign-in/[[...index]].ts

    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("redirect_url", request.url);
    return NextResponse.redirect(signInUrl);
  }

  // if (userId) {
  //   // redirect the users to /dashboard
  //   const dashboard = new URL("/dashboard", request.url);
  //   dashboard.searchParams.set("redirect_url", request.url);
  //   return NextResponse.redirect(dashboard);
  // }
  // if the user is signed in, continue to the dashboard

  return NextResponse.next();
});

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};
