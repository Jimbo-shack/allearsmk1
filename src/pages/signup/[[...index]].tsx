import { SignUp } from "@clerk/nextjs";
import BackGroundRadar from "../../components/backGroundRadar";
import Header from "../Header";

const SignUpPage = () => (
  <main className="flex h-screen flex-col items-center bg-header text-white selection:bg-redPrimary selection:text-background ">
    <BackGroundRadar />
    <Header />
    <div className="z-50 flex flex-col items-center justify-center gap-4">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Sign Up
        </h1>
        <SignUp
          path="/signup"
          routing="path"
          signInUrl="/signin"
          appearance={{
            elements: {
              formButtonPrimary: "bg-redPrimary hover:bg-redPrimary text-white",
              footerActionLink: "text-redPrimary",
            },
          }}
        />
      </div>
    </div>
  </main>
);

export default SignUpPage;
