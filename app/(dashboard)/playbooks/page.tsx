"use client";

import React from "react";
import AIBanner from "./components/AIBanner";
import Header from "@/app/components/Header";
import { Copy, Plus } from "lucide-react";
import { AiRecommendations } from "./components/AIRecommandation";
import CampaignCards from "./components/CampaignCards";
import NewPlaybookModal from "./components/NewPlaybookModal";

const PlaybookPage = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [isNewPlaybookModalOpen, setIsNewPlaybookModalOpen] =
    React.useState(false);
  return (
    <>
      <div className="space-y-6">
        <AIBanner />
        <Header
          onMenuClick={onMenuClick}
          title="Playbooks"
          description="Define your outreach logic, tone and templates for every campaign."
        >
          {/* Specific Buttons for Inbox */}
          <button className="flex-1 md:flex-none px-4 py-2.5 md:px-4 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            <Copy size={18} className="inline-block mr-2 -mt-1" />
            Import/Export
          </button>

          <button
            onClick={() => setIsNewPlaybookModalOpen(true)}
            className="flex-1 md:flex-none px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus size={18} className="text-white/90" />
            New Playbook
          </button>
        </Header>
        <AiRecommendations />
        <CampaignCards />
      </div>
      <NewPlaybookModal
        open={isNewPlaybookModalOpen}
        onOpenChange={setIsNewPlaybookModalOpen}
      />
    </>
  );
};

export default PlaybookPage;
