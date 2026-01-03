"use client";

import React, { useState } from "react";
import { Search, ChevronDown, Filter } from "lucide-react";
import { MoreFiltersModal } from "./MoreFiltersModal";

export default function CampaignSearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const options = ["All Status", "Running", "Paused", "Completed", "Draft"];
  const handleSelect = (option: string) => {
    setSelectedStatus(option);
    setIsOpen(false);
  };

  return (
    <>
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
              {/* Trigger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full md:w-[160px] h-12 px-5 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center justify-between text-gray-700 transition-all duration-200 group"
              >
                <span className="text-sm font-medium">{selectedStatus}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 group-hover:text-gray-700 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full md:w-[160px] bg-white border border-gray-100 rounded-2xl shadow-xl z-20 p-1">
                  <div className="flex flex-col">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`text-left w-full px-4 py-3 text-sm rounded-xl transition-colors ${
                          selectedStatus === option
                            ? "text-gray-900 bg-gray-50 font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* More Filters Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-full md:w-auto h-12 px-5 bg-white border border-gray-200 hover:bg-gray-50 rounded-2xl flex items-center justify-center gap-2 text-gray-700 transition-all whitespace-nowrap"
            >
              <Filter size={18} className="fill-gray-700" />
              <span className="text-sm font-medium">More Filters</span>
            </button>
          </div>
        </div>
      </div>
      <MoreFiltersModal open={isFilterOpen} onOpenChange={setIsFilterOpen} />
    </>
  );
}
