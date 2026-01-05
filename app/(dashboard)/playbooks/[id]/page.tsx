import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import HeaderActions from "../components/playbookdetailsComponents/header-actions";
import NavigationBanner from "../components/playbookdetailsComponents/navigation-banner";
import ToneSettingsCard from "../components/playbookdetailsComponents/tone-settings-card";
import VocabularyControlCard from "../components/playbookdetailsComponents/vocabulary-control-card";

export default function PlaybookEditorPage() {
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
        <NavigationBanner />
        <ToneSettingsCard />
        <VocabularyControlCard />
      </div>
    </>
  );
}
