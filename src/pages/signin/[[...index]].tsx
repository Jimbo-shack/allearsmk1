import { SignIn } from "@clerk/nextjs";
import BackGroundRadar from "../backGroundRadar";
import Header from "../Header";
import Targets from "../targets";

const SignInPage = () => (
  <main className="flex h-screen flex-col items-center bg-header text-white selection:bg-redPrimary selection:text-background">
    <BackGroundRadar />
    <Targets />
    <Header />
    <div className="z-50 flex flex-col items-center justify-center gap-4 ">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Sign In
        </h1>
        <SignIn
          path="/signin"
          routing="path"
          signUpUrl="/signup"
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-redPrimary hover:bg-redPrimary/70 text-white",
              footerActionLink: "text-redPrimary",
            },
          }}
        />
      </div>
    </div>
  </main>
);

export default SignInPage;
