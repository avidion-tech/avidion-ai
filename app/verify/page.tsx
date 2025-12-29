"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";

export default function VerificationPage() {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Handle OTP input logic
  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/image1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 w-full px-4 flex justify-center">
          <div className="w-full max-w-xl rounded-[2rem] bg-white/30 p-9 backdrop-blur-4xl border border-white/20 shadow-2xl">
            <div className="mb-9 text-center">
              <h1 className="text-2xl font-medium text-white font-sans">
                {" "}
                Check Your Email
              </h1>
              <p className="mt-2 text-xl text-white">
                We sent a 6-digit verification code to user@gmail.com
              </p>
            </div>

            <div className="relative z-10 w-full px-4 flex justify-center space-x-5 mb-8">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-bold bg-white text-gray-800 rounded-2xl outline-none focus:ring-4 focus:ring-blue-400 transition-all"
                />
              ))}
            </div>

            <Button type="submit" className="w-full h-14 text-lg font-semibold">
              Verify code
            </Button>

            <p className="mt-8 text-lg text-white flex items-center justify-center gap-2">
              Did&apos;t receive the code?{" "}
              <button className="text-white font-semibold hover:underline cursor-pointer">
                Resend code
              </button>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
