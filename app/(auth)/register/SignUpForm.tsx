import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 23 23">
    <path fill="#f3f3f3" d="M0 0h23v23H0z" />
    <path fill="#f35325" d="M1 1h10v10H1z" />
    <path fill="#81bc06" d="M12 1h10v10H12z" />
    <path fill="#05a6f0" d="M1 12h10v10H1z" />
    <path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
);

const SignUpForm = () => {
  return (
    <>
      <div className="w-full max-w-xl rounded-[2rem] bg-white/30 p-8 backdrop-blur-4xl border border-white/20 shadow-2xl">
        <div className="mb-9 text-center">
          <h1 className="text-3xl font-medium text-white">
            Create your account
          </h1>
          <p className="mt-2 text-xl text-white">
            Start automating your sales outreach today
          </p>
        </div>

        <div className="space-y-4">
          <button
            className="
                 group flex w-full items-center justify-center gap-3 rounded-full py-3.5 text-sm font-semibold transition-all duration-200
                 bg-white text-gray-800 border-2 border-transparent shadow-md
                 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg
                 active:scale-95 active:shadow-inner"
          >
            <span className="group-hover:animate-vibrate">
              <GoogleIcon />
            </span>

            <span className="group-hover:animate-vibrate">
              Continue with Google
            </span>
          </button>

          <button
            className="
                 group flex w-full items-center justify-center gap-3 rounded-full py-3.5 text-sm font-semibold transition-all duration-200
                 bg-white text-gray-800 border-2 border-transparent shadow-md
                 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg
                 active:scale-95 active:shadow-inner"
          >
            <span className="group-hover:animate-vibrate">
              <MicrosoftIcon />
            </span>

            <span className="group-hover:animate-vibrate">
              Continue with Microsoft
            </span>
          </button>

          <div className="relative my-8 flex items-center py-2">
            <div className="flex-grow border-t-2 border-white"></div>
            <span className="mx-4 flex-shrink text-md text-white">
              Or continue with email
            </span>
            <div className="flex-grow border-t-2 border-white"></div>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Input
                label="Email address"
                type="email"
                placeholder="you@company.com"
                icon={
                  <Image
                    src="/vector6.svg"
                    alt="Email icon"
                    width={20}
                    height={20}
                    priority
                  />
                }
                className="h-14 text-lg pl-14"
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                label="Password"
                type="password"
                placeholder="********"
                icon={
                  <Image
                    src="/vector7.svg"
                    alt="Email icon"
                    width={20}
                    height={20}
                    priority
                  />
                }
                className="h-14 text-lg"
                required
              />
            </div>

            <div className="pt-4 pb-2">
              <Button
                type="submit"
                className="w-full gap-5 h-14 text-lg font-semibold active:scale-95 transition-transform"
              >
                Create account
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center text-lg text-white">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-white hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
