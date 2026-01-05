"use client";

import React from "react";
import { Menu } from "lucide-react";
import { GoBellFill } from "react-icons/go";

interface HeaderProps {
  onMenuClick: () => void;
  title: React.ReactNode; // ReactNode allows for strings or JSX (like the emoji span)
  description: string;
  children?: React.ReactNode; // This is where your custom buttons will go
}

export default function Header({
  onMenuClick,
  title,
  description,
  children,
}: HeaderProps) {
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

          {/* Title & Description */}
          <div>
            <h1 className="text-xl md:text-3xl font-semibold text-gray-900 flex items-center gap-2">
              {title}
            </h1>
            <p className="text-xs md:text-lg text-gray-500 mt-1">
              {description}
            </p>
          </div>
        </div>

        {/* MOBILE ONLY: Notification Bell */}
        <button className="md:hidden relative p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 shadow-sm transition">
          <GoBellFill size={20} />
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
      </div>

      {/* Desktop Actions Area */}
      <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
        {/* DESKTOP ONLY: Notification Bell (Always present) */}
        <button className="hidden md:block relative p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-slate-100 hover:border-blue-300 shadow-sm transition group">
          <GoBellFill size={24} className="text-gray-600" />
          <span className="absolute top-4 right-4 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white transform translate-x-1 -translate-y-1"></span>
        </button>

        {children}
      </div>
    </div>
  );
}
