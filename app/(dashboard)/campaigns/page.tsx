"use client";

import React, { useState } from "react";
import AIBanner from "./components/AIBanner";
import Header from "@/app/components/Header";
import { Plus } from "lucide-react";
import { FaPause } from "react-icons/fa6";
import CampaignStats from "./components/CampaignStats";
import CampaignSearchBar from "./components/SearchBar";
import CampaignTable from "./components/CampaignTable";
import CampaignInsightsCard from "./components/CampaignInsightsCard";
import { NewCampaignModal } from "./components/NewCampaignModal";

const Page = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isNewCampaignModalOpen, setIsNewCampaignModalOpen] = useState(false);
  return (
    <>
      <div className="space-y-6">
        <AIBanner />
        <Header
          onMenuClick={onMenuClick}
          title="Campaigns"
          description="Manage and monitor all Your AI-driven outreach campaigns."
        >
          {/* Specific Buttons for Drafts */}
          <button className="flex-1 md:flex-none px-4 py-2.5 md:px-4 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            <FaPause size={18} className="inline-block mr-2 -mt-1" />
            Pause All
          </button>

          <button
            onClick={() => setIsNewCampaignModalOpen(true)}
            className="flex-1 md:flex-none px-6 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus size={18} className="text-white/90" />
            New Campaign
          </button>
        </Header>
        <CampaignStats />
        <CampaignSearchBar />
        <CampaignTable />
        <CampaignInsightsCard />
      </div>
      <NewCampaignModal
        open={isNewCampaignModalOpen}
        onOpenChange={setIsNewCampaignModalOpen}
      />
    </>
  );
};

export default Page;
