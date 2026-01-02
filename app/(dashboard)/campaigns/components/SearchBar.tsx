"use client";

import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";

export default function CampaignSearchBar() {
  return (
    <div className="w-full bg-slate-50 p-6 rounded-[32px] shadow-sm">
      <div className="flex flex-col md:flex-row items-center gap-3">
        {/* Search Input Section */}
        {/* flex-1 makes it take up remaining space on desktop */}
        <div className="relative w-full md:flex-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search campaigns..."
            className="w-full h-12 pl-12 pr-4 bg-gray-200 rounded-2xl border-none outline-none text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-100 transition-all"
          />
        </div>

        {/* Right Side Actions Container */}
        <div className="flex w-full md:w-auto items-center gap-3">
          {/* Status Dropdown */}
          <div className="relative w-full md:w-auto">
            <button className="w-full md:w-[160px] h-12 px-5 bg-gray-200 hover:bg-gray-300 rounded-2xl flex items-center justify-between text-gray-700 transition-colors group">
              <span className="text-sm font-medium">All Status</span>
              <ChevronDown
                size={18}
                className="text-gray-500 group-hover:text-gray-700 transition-colors"
              />
            </button>
            {/* Note: In a real app, you would attach your Dropdown logic/menu here */}
          </div>

          {/* More Filters Button */}
          <button className="w-full md:w-auto h-12 px-5 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 text-gray-700 transition-all whitespace-nowrap">
            <Filter size={18} className="fill-gray-700" />
            <span className="text-sm font-medium">More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
