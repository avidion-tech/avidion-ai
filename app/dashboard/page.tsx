"use client";

import React from "react";
import DashboardLayout from "@/app/components/app/dashboard/DashboardLayout";
import DashboardStats from "@/app/components/app/dashboard/DashboardStats";
import {
  EngagementChart,
  PlaybookChart,
} from "@/app/components/app/dashboard/DashboardCharts";
import ActivityStream from "@/app/components/app/dashboard/ActivityStream";
import AIInsightsPanel from "@/app/components/app/dashboard/AIInsightsPanel";
import RecentActivityCard from "@/app/components/app/dashboard/RecentActivityCard";
import MonthlyUsage from "@/app/components/app/dashboard/MonthlyUsage";
import Header from "../main/Header";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Header />
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
    </DashboardLayout>
  );
}
