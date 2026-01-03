"use client";

import React, { useState } from "react";

// 2. Import the Draft Components we created
import DraftAIBanner from "./components/DraftAIBanner";
// import DraftHeader from "./components/DraftHeader";
import DraftStats from "./components/DraftStats";
import DraftTable from "./components/DrafttTable";
import Image from "next/image";
import Header from "@/app/components/Header";
import { IoMdRefresh } from "react-icons/io";
import { Filter } from "lucide-react";
import { GenerateMoreModal } from "./components/GenerateMoreModal";

export default function Page({ onMenuClick }: { onMenuClick: () => void }) {
  // State for the tabs (All, Unread, etc.)
  // We lift this state up here so we can filter data in the future if needed
  const [activeTab, setActiveTab] = useState("All (8)");
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <DraftAIBanner />
        <Header
          onMenuClick={onMenuClick}
          title="Drafts"
          description="Review and Approve AI-generated email drafts."
        >
          {/* Specific Buttons for Drafts */}
          <button className="flex-1 md:flex-none px-4 py-2.5 md:px-4 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            <IoMdRefresh size={18} className="inline-block mr-2 -mt-1" />
            Refresh
          </button>

          <button
            onClick={() => setIsGenerateModalOpen(true)}
            className="flex-1 md:flex-none px-6 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Filter size={18} className="text-white/90" />
            Generate more
          </button>
        </Header>
        <DraftStats />
        <DraftTable
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsGenerateModalOpen={setIsGenerateModalOpen}
        />
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
      <GenerateMoreModal
        open={isGenerateModalOpen}
        onOpenChange={setIsGenerateModalOpen}
      />
    </>
  );
}
