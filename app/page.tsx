import DashboardLayout from "@/app/components/app/dashboard/DashboardLayout";
import DashboardStats from "@/app/components/app/dashboard/DashboardStats";
import {
  EngagementChart,
  PlaybookChart,
} from "@/app/components/app/dashboard/DashboardCharts";
import ActivityStream from "./components/app/dashboard/ActivityStream";
import AIInsightsPanel from "./components/app/dashboard/AIInsightsPanel";
import RecentActivityCard from "./components/app/dashboard/RecentActivityCard";
import MonthlyUsage from "./components/app/dashboard/MonthlyUsage";

export default function Home() {
  return (
    <>
      <DashboardLayout>
        {/* Metric Cards - Grid acts as 1 col on mobile, 4 on desktop */}
        <DashboardStats />

        {/* Charts Grid - 1 col on mobile, 2 on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EngagementChart />
          <PlaybookChart />
        </div>

        <div className="mt-8">
          <ActivityStream />
        </div>

        <div className="mt-8">
          <AIInsightsPanel />
        </div>

        <div className="mt-8 space-y-6">
          <RecentActivityCard />
          {/* Passed props for dynamic data */}
          <MonthlyUsage current={2500} total={3000} />
        </div>
      </DashboardLayout>
    </>
  );
}
