"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const STATUS_MESSAGES = [
  "Drafting emails...",
  "Syncing contacts...",
  "Analyzing leads...",
  "Updating CRM...",
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [statusIndex, setStatusIndex] = useState(0);
  const pathname = usePathname(); // 2. Get current URL path

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 3. Updated menu items with real paths
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: CgMicrosoft },
    { name: "Inbox", href: "/inbox", icon: BiSolidInbox },
    { name: "Drafts", href: "/draft", icon: MdDrafts },
    { name: "Campaigns", href: "/campaigns", icon: RiTelegram2Fill },
    { name: "Playbooks", href: "/playbooks", icon: HiMiniBookOpen },
    { name: "Settings", href: "/settings", icon: IoMdSettings },
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
          {menuItems.map((item) => {
            // 4. Dynamic Active Logic
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`) ||
              (pathname === "/" && item.href === "/dashboard");

            return (
              <Link
                href={item.href}
                key={item.name}
                className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all font-medium ${
                  isActive
                    ? "bg-white text-blue-700 shadow-md translate-x-1 " +
                      "before:absolute before:-left-2 before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-12 before:bg-white before:rounded-full before:content-['']"
                    : "text-blue-50 hover:bg-white/10 hover:translate-x-1"
                }`}
              >
                <item.icon
                  size={18}
                  className={isActive ? "text-blue-600" : "text-blue-100"}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Profile Footer */}
        <div className="flex items-center gap-3 px-2 pt-6 mt-auto">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
            <Image
              src="/Circle.svg"
              alt="AIVA"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="overflow-hidden flex flex-col justify-center w-full">
            <p className="text-sm font-bold truncate">AIVA</p>

            {/* The Animated Scrolling Text */}
            <div className="h-4 relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
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
