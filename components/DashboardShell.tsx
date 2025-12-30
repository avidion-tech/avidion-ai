"use client";

import { useState } from "react";
import Sidebar from "@/app/main/Sidebar"; // Keep your existing import path
import { Menu } from "lucide-react";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // 1. Parent: Fix height to screen and hide overflow to prevent body scroll
    <div className="flex bg-blue-50 h-screen w-full overflow-hidden relative">
      {/* 2. Sidebar: Positioned Fixed via the Sidebar component CSS */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* 3. Mobile Header: Sticky at top, visible only on mobile */}
      <div className="lg:hidden absolute top-0 left-0 right-0 flex items-center p-4 bg-white border-b z-30 h-16">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <span className="ml-4 font-bold text-lg">Avidion</span>
      </div>

      {/* 4. Main Content Area */}
      <main
        className="
            flex-1 
            h-full 
            overflow-y-auto 
            overflow-x-hidden 
            transition-all 
            duration-300 
            ease-in-out 
            pt-16 lg:pt-4 
            pb-4 
            lg:ml-[20rem] 
            p-4 
            lg:p-8
        "
      >
        {/* 5. Content Wrapper: Ensures content stretches fully but has a sanity limit on huge screens */}
        <div className="w-full max-w-[1920px] mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
