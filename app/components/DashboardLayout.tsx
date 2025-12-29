"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-blue-50 min-h-screen relative overflow-hidden">
      {/* Sidebar with mobile state */}
      {/* Ensure your Sidebar component inside is also updated to w-72 */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      {/* UPDATED: lg:ml-[18rem] -> lg:ml-80 
          w-72 is 18rem. To keep your previous spacing (gap), 
          we use ml-80 (20rem), providing 18rem for sidebar + 2rem gap.
          If you want it flush, use lg:ml-72.
      */}
      <main className="flex-1 w-full lg:ml-80 p-4 md:p-8 h-screen overflow-y-auto overflow-x-hidden transition-all duration-300">
        <div className="max-w-7xl mx-auto pb-20">
          {" "}
          {/* Added pb-20 for safe scroll space */}
          {/* Header with toggle callback */}
          <Header onMenuClick={() => setSidebarOpen(true)} />
          {/* Page Content */}
          {children}
        </div>
      </main>
    </div>
  );
}
