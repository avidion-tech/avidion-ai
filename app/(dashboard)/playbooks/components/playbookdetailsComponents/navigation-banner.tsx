import React from "react";
import { FaBrain, FaClock, FaFile, FaMessage, FaUsers } from "react-icons/fa6";

export default function NavigationBanner() {
  const navItems = [
    { icon: FaMessage, label: "Voice & Tone", active: true },
    { icon: FaFile, label: "Templates", active: false },
    { icon: FaUsers, label: "ICP", active: false },
    { icon: FaBrain, label: "Learning", active: false },
    { icon: FaClock, label: "Versions", active: false },
  ];

  return (
    // Updated background to a vibrant blue (blue-500) and adjusted padding/rounding
    <div className="bg-[#3B82F6] rounded-full p-1.5 mt-6 inline-flex max-w-full overflow-x-auto no-scrollbar shadow-sm">
      <div className="flex items-center gap-2 px-0.5 py-0.5">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 px-5 py-2 rounded-full transition-all duration-200 font-medium text-[15px] whitespace-nowrap ${
              item.active
                ? "bg-slate-50 text-[#3B82F6] shadow-sm" // Active: White bg, Blue text
                : "text-white hover:bg-white/10" // Inactive: White text, subtle hover
            }`}
          >
            {/* Icons sized slightly larger to match visual weight */}
            <item.icon className="h-5 w-5" strokeWidth={2.5} />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
