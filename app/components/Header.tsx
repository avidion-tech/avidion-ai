"use client";
import { Menu } from "lucide-react";
import { GoBellFill } from "react-icons/go";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      {/* Top Section: Menu + Text + Mobile Notification */}
      <div className="flex items-start justify-between w-full md:w-auto">
        <div className="flex items-start gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
          >
            <Menu size={24} />
          </button>

          {/* Greeting Text */}
          <div>
            {/* UPDATED: text-xl (mobile) -> md:text-3xl (desktop) */}
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
              Good morning, Admin{" "}
              <span className="text-2xl md:text-3xl">👋</span>
            </h1>
            {/* UPDATED: text-xs (mobile) -> md:text-lg (desktop) */}
            <p className="text-xs md:text-lg text-gray-500 mt-1">
              Here&apos;s how your AI SDR performed in the last 7 days.
            </p>
          </div>
        </div>

        {/* MOBILE ONLY: Notification Bell (Right side of text) */}
        <button className="md:hidden relative p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 shadow-sm transition">
          <GoBellFill size={20} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
      </div>

      {/* Desktop Actions Area */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        {/* DESKTOP ONLY: Notification Bell */}
        {/* UPDATED: Increased padding to p-3 and icon size to 24 */}
        <button className="hidden md:block relative p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-slate-100 hover:border-blue-300  shadow-sm transition group">
          <GoBellFill size={24} className="text-gray-600" />
          <span className="absolute top-4 right-4 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white transform translate-x-1 -translate-y-1"></span>
        </button>

        {/* UPDATED: text-sm -> md:text-base | px-6 -> md:px-8 | py-2.5 -> md:py-3 */}
        <button className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
          Upload Leads
        </button>

        {/* UPDATED: text-sm -> md:text-base | px-6 -> md:px-8 | py-2.5 -> md:py-3 */}
        <button className="flex-1 md:flex-none px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-1 whitespace-nowrap">
          <span>+</span> New Campaign
        </button>
      </div>
    </div>
  );
}
