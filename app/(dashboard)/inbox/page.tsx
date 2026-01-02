"use client";

import React, { useState } from "react";

import AIBanner from "./components/AIBanner";
import InboxStats from "./components/InboxStats";
import InboxTable from "./components/InboxTable";
import Header from "@/app/components/Header";
import { IoMdRefresh } from "react-icons/io";
import { Filter } from "lucide-react";
import { AdvancedFiltersModal } from "./components/AdvancedFiltersModal";

export default function InboxPage({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  // State for the tabs (All, Unread, etc.)
  // We lift this state up here so we can filter data in the future if needed
  const [activeTab, setActiveTab] = useState("All (8)");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <AIBanner />
        <Header
          onMenuClick={onMenuClick}
          title="Inbox"
          description="Manage inbound replies with AI classification."
        >
          {/* Specific Buttons for Inbox */}
          <button className="flex-1 md:flex-none px-4 py-2.5 md:px-4 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            <IoMdRefresh size={18} className="inline-block mr-2 -mt-1" />
            Refresh
          </button>

          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="flex-1 md:flex-none px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Filter size={18} className="text-white/90" />
            Advanced Filters
          </button>
        </Header>
        <InboxStats />
        <InboxTable activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <AdvancedFiltersModal
        open={isFilterModalOpen}
        onOpenChange={setIsFilterModalOpen}
      />
    </>
  );
}
