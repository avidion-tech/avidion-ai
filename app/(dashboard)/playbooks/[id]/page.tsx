"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import HeaderActions from "../components/playbookdetailsComponents/header-actions";
import NavigationBanner from "../components/playbookdetailsComponents/navigation-banner";
import ToneSettingsCard from "../components/playbookdetailsComponents/tone-settings-card";
import VocabularyControlCard from "../components/playbookdetailsComponents/vocabulary-control-card";
import StyleRulesSection from "../components/playbookdetailsComponents/style-rules-section";
import TestExampleSection from "../components/playbookdetailsComponents/test-example-section";
import ActiveTemplateSection from "../components/playbookdetailsComponents/active-template";
import AllTemplatesSection from "../components/playbookdetailsComponents/all-templates-section";
import CreateNewTemplateModal from "../components/playbookdetailsComponents/CreateNewTemplateModal";
// import TargetPersonasSection from "../components/playbookdetailsComponents/TargetPersonasSection";
// import CompanyProfileSection from "../components/playbookdetailsComponents/CompanyProfileSection";

export default function PlaybookEditorPage() {
  const [activeTab, setActiveTab] = useState("Voice & Tone");
  const [isOpenNewTemplateModal, setIsOpenNewTemplateModal] = useState(false);

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <Link
            href="/playbooks"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-slate-700 text-lg font-medium hover:bg-gray-200 transition-colors duration-700 hover:shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" size={40} />
            Back to Playbooks
          </Link>
          <HeaderActions />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-xl md:text-[20px] font-semibold text-gray-700 flex items-center gap-2">
              SaaS Demo Outreach
            </h1>
            <Badge
              variant="secondary"
              className="bg-green-100 border border-green-200 text-sm text-green-400 hover:bg-green-200 rounded-full px-3 font-medium"
            >
              v1.3 Active
            </Badge>
          </div>
          <p className="text-xs md:text-[15px] text-gray-500 mt-1">
            Last updated: Nov 5, 2025 by Admin User
          </p>
        </div>
        <NavigationBanner activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "Voice & Tone" && (
          <>
            <ToneSettingsCard />
            <VocabularyControlCard />
            <StyleRulesSection />
            <TestExampleSection />
          </>
        )}
        {activeTab === "Templates" && (
          <>
            <ActiveTemplateSection />
            <AllTemplatesSection
              setIsOpenNewTemplateModal={setIsOpenNewTemplateModal}
            />
          </>
        )}

        {activeTab === "ICP" && (
          <>
            <div className="p-10 text-center text-gray-500">
              ICP Settings Content
            </div>
            {/* <TargetPersonasSection />
            <CompanyProfileSection /> */}
          </>
        )}

        {activeTab === "Learning" && (
          <>
            <div className="p-10 text-center text-gray-500">
              Learning Content
            </div>
          </>
        )}

        {activeTab === "Versions" && (
          <>
            <div className="p-10 text-center text-gray-500">
              Version History
            </div>
          </>
        )}
      </div>
      <CreateNewTemplateModal
        open={isOpenNewTemplateModal}
        onOpenChange={setIsOpenNewTemplateModal}
      />
    </>
  );
}
