"use client";

import { useState, useEffect } from "react"; // Added hooks
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Added for animation

// Importing icons
import { RiTelegram2Fill } from "react-icons/ri";
import { MdDrafts } from "react-icons/md";
import { BiSolidInbox } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { HiMiniBookOpen } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// 1. Define your status messages here
const STATUS_MESSAGES = [
  "Drafting emails...",
  "Syncing contacts...",
  "Analyzing leads...",
  "Updating CRM...",
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // 2. State for the current text index
  const [statusIndex, setStatusIndex] = useState(0);

  // 3. Cycle through the messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 3000); // Change speed here (3000ms = 3s)

    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: CgMicrosoft, active: true },
    { name: "Inbox", icon: BiSolidInbox, active: false },
    { name: "Drafts", icon: MdDrafts, active: false },
    { name: "Campaigns", icon: RiTelegram2Fill, active: false },
    { name: "Playbooks", icon: HiMiniBookOpen, active: false },
    { name: "Settings", icon: IoMdSettings, active: false },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 z-50 w-72 text-white p-4 
          flex flex-col
          transition-transform duration-300 ease-in-out
          bg-gradient-to-b from-blue-600 to-blue-800
          h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 
          lg:m-4 
          lg:rounded-3xl 
          lg:h-[calc(100vh-2rem)] 
          lg:shadow-2xl
        `}
      >
        <div className="flex justify-between items-center mb-10 px-2 mt-2">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-xl h-14 w-14 flex items-center justify-center shrink-0">
              <Image
                src="/sidebaricons/avidionicon.png"
                alt="Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <span className="text-3xl font-medium tracking-wide">AVIDION</span>
          </div>
          {/* Close Button (Mobile Only) */}
          <button
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-white/20 rounded-md transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2 flex-1">
          {menuItems.map((item) => (
            <Link
              href="#"
              key={item.name}
              className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium ${
                item.active
                  ? "bg-white text-blue-700 shadow-md translate-x-1 " +
                    "before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-12 before:bg-white before:rounded-full before:content-['']"
                  : "text-blue-50 hover:bg-white/10 hover:translate-x-1"
              }`}
            >
              <item.icon
                size={18}
                className={item.active ? "text-blue-600" : "text-blue-100"}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Profile Footer */}
        <div className="flex items-center gap-3 px-2 pt-6 mt-auto">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
            <Image
              src="/sidebaricons/user-avatar.png"
              alt="AIVA"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden flex flex-col justify-center w-full">
            <p className="text-sm font-bold truncate">AIVA</p>

            {/* 4. The Animated Scrolling Text */}
            <div className="h-4 relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex} // key change triggers animation
                  initial={{ y: 20, opacity: 0 }} // Start below
                  animate={{ y: 0, opacity: 1 }} // Move to center
                  exit={{ y: -20, opacity: 0 }} // Exit to top
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-xs text-blue-200 truncate opacity-80 absolute w-full"
                >
                  {STATUS_MESSAGES[statusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
