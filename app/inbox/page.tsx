"use client";

import React, { useState } from "react";

// 1. Import your Layout (Adjust path if your file is in a different utils folder)
import DashboardLayout from "@/app/components/app/dashboard/DashboardLayout";

// 2. Import the Inbox Components we created
import AIBanner from "@/app/components/app/inbox/AIBanner";
import InboxHeader from "@/app/components/app/inbox/InboxHeader";
import InboxStats from "@/app/components/app/inbox/InboxStats";
import InboxTable from "@/app/components/app/inbox/InboxTable";

export default function InboxPage() {
  // State for the tabs (All, Unread, etc.)
  // We lift this state up here so we can filter data in the future if needed
  const [activeTab, setActiveTab] = useState("All (8)");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AIBanner />
        <InboxHeader />
        <InboxStats />
        <InboxTable activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </DashboardLayout>
  );
}
