"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email"); // Get the email from the form

    // Navigate to verify page with the email in the URL
    router.push(`/verify?email=${encodeURIComponent(email as string)}`);
  };

  return (
    <div className="w-full max-w-xl rounded-[2rem] bg-white/30 p-9 backdrop-blur-4xl border border-white/20 shadow-2xl">
      <div className="mb-9 text-center">
        <h1 className="text-3xl font-medium text-white">Welcome back</h1>
        <p className="mt-2 text-xl text-white">
          Sign in to continue to Avidion
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Input
            label="Email address"
            type="email"
            placeholder="you@company.com"
            icon={
              <Image
                src="/vector6.svg"
                alt="Email icon"
                width={20} // Matches your previous size={20}
                height={20}
                priority // Since this is a login form, priority helps with LCP
              />
            }
            /* Ensure pl-14 is here to prevent text from overlapping the icon at left-6 */
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
                width={20} // Matches your previous size={20}
                height={20}
                priority // Since this is a login form, priority helps with LCP
              />
            } // Slightly larger icon
            className="h-14 text-lg" // Increased input height and text size
            required
          />
        </div>

        <div className="py-3 flex items-center justify-between text-base">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-200">Remember me</span>
          </label>
          <a
            href="#"
            className="font-medium text-gray-200 hover:text-white hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Increased button height and text size */}
        <Button type="submit" className="w-full h-14 text-lg font-semibold">
          Sign in
        </Button>
      </form>

      {/* Increased margin-top for the footer */}
      <div className="mt-10 text-center text-base text-gray-300">
        Don&apos;t have an account?{" "}
        <a href="/home" className="font-semibold text-white hover:underline">
          Sign up for free
        </a>
      </div>
    </div>
  );
};
