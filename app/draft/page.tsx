"use client";

import React, { useState } from "react";

// 1. Import your Layout (Adjust path if your file is in a different utils folder)
import DashboardLayout from "@/app/components/app/dashboard/DashboardLayout";

// 2. Import the Draft Components we created
import DraftAIBanner from "@/app/components/app/draft/DraftAIBanner";
import DraftHeader from "@/app/components/app/draft/DraftHeader";
import DraftStats from "@/app/components/app/draft/DraftStats";
import DraftTable from "@/app/components/app/draft/DrafttTable";
import Image from "next/image";

export default function InboxPage() {
  // State for the tabs (All, Unread, etc.)
  // We lift this state up here so we can filter data in the future if needed
  const [activeTab, setActiveTab] = useState("All (8)");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DraftAIBanner />
        <DraftHeader />
        <DraftStats />
        <DraftTable activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="mt-8 bg-indigo-100 p-6 rounded-3xl flex items-start md:items-center gap-3 text-indigo-900 border border-indigo-200">
          {/* <Brain className="w-6 h-6 text-pink-500 shrink-0 mt-0.5 md:mt-0" /> */}
          <Image
            src={"/icons/Brain.png"}
            alt="Activity Icon"
            width={40}
            height={40}
            className="w-5 h-5 object-contain"
            unoptimized
          />
          <p className="text-[18px] leading-relaxed">
            {/* <span className="font-semibold">AIVA Summary:</span> I&apos;ve
            drafted <span className="font-semibold">64 emails</span>, sent{" "}
            <span className="font-semibold">18</span>, and detected{" "}
            <span className="font-semibold">2 positive replies</span>. Your
            outreach is on track. */}
            I&apos;ll send these at safe intervals to protect your inbox
            reputation
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
