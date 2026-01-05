"use client";

import Image from "next/image";
import React from "react";

export default function AIBanner() {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded-2xl p-4 flex items-center gap-4 shadow-sm mt-8">
      <div className="relative shrink-0">
        <Image
          src="/Circle.svg"
          alt="AI Agent"
          className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          width="40"
          height="40"
        />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      </div>
      <div>
        <h3 className="text-slate-800 font-medium text-sm md:text-base">
          Your Playbook guides How i talk to your leads. Update tone, CTA, value
          props and i&apos;ll adjust automatically.
        </h3>
        <p className="text-slate-500 text-xs md:text-sm mt-0.5">
          I can suggest improvements based on campaign performance.
        </p>
      </div>
    </div>
  );
}
