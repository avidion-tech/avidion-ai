"use client";

import React from "react";
import DashboardStats from "./components/DashboardStats";
import { EngagementChart, PlaybookChart } from "./components/DashboardCharts";
import ActivityStream from "./components/ActivityStream";
import AIInsightsPanel from "./components/AIInsightsPanel";
import RecentActivityCard from "./components/RecentActivityCard";
import MonthlyUsage from "./components/MonthlyUsage";
import Header from "../../components/Header";

export default function Home({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <>
      <div className="space-y-6">
        <Header
          onMenuClick={onMenuClick}
          title={
            <>
              Good morning, Admin{" "}
              <span className="text-2xl md:text-3xl">👋</span>
            </>
          }
          description="Here's how your AI SDR performed in the last 7 days."
        >
          {/* Specific Buttons for Dashboard */}
          <button className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            Upload Leads
          </button>

          <button className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-1 whitespace-nowrap">
            <span>+</span> New Campaign
          </button>
        </Header>
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementChart />
          <PlaybookChart />
        </div>
        <ActivityStream />
        <AIInsightsPanel />
        <RecentActivityCard />
        <MonthlyUsage current={2500} total={3000} />
      </div>
    </>
  );
}
