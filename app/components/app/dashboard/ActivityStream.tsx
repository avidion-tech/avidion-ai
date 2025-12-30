"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { FaClock } from "react-icons/fa6";

// --- Types & Data ---

type ThemeColor = "blue" | "green" | "purple" | "yellow" | "red";

interface ActivityItemData {
  id: number;
  theme: ThemeColor;
  icon: string; // Using string for file paths
  title: string;
  timeAgo: string;
  status?: {
    type: "badge" | "icon";
    label?: string;
    icon?: React.ElementType;
  };
}

const activityData: ActivityItemData[] = [
  {
    id: 1,
    theme: "blue",
    icon: "/icons/ActStr1.png",
    title: "Generated 42 drafts using Playbook v1.0",
    timeAgo: "2 min ago",
    status: { type: "badge", label: "In Progress" },
  },
  {
    id: 2,
    theme: "green",
    icon: "/icons/ActStr2.png",
    title: "Identified 6 positive replies from recent campaigns",
    timeAgo: "8 min ago",
    status: { type: "icon", icon: CheckCircle2 },
  },
  {
    id: 3,
    theme: "purple",
    icon: "/icons/ActStr3.png",
    title: "Recommends adjusting Follow-up #2 timing",
    timeAgo: "15 min ago",
    status: { type: "badge", label: "Needs Review" },
  },
  {
    id: 4,
    theme: "yellow",
    icon: "/icons/ActStr4.png",
    title: "Flagged 12 low-quality emails for your review",
    timeAgo: "22 min ago",
    status: { type: "badge", label: "Action Required" },
  },
  {
    id: 5,
    theme: "red",
    icon: "/icons/ActStr5.png",
    title: "Paused sending due to inbox warming schedule",
    timeAgo: "1 hour ago",
  },
];

// Added 'border' property to all themes
const colorStyles: Record<
  ThemeColor,
  {
    bg: string;
    border: string;
    iconText: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconText: "text-blue-500",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-600",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    iconText: "text-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    border: "border-purple-200",
    iconText: "text-purple-500",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-600",
  },
  yellow: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    iconText: "text-orange-500",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-600",
  },
  red: {
    bg: "bg-red-100",
    border: "border-red-200",
    iconText: "text-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-600",
  },
};

// --- Sub-components ---

const ActivityItem = ({ data }: { data: ActivityItemData }) => {
  const colors = colorStyles[data.theme];

  return (
    <div
      // Added 'border' and '${colors.border}' to classes
      className={`w-full flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 md:p-5 rounded-3xl ${colors.bg} border ${colors.border} transition-all hover:shadow-sm`}
    >
      <Image
        src={data.icon}
        alt={data.title}
        width={40}
        height={40}
        className="w-12 h-12 object-contain"
        unoptimized
      />
      <div className="flex-1 space-y-1">
        <p className="text-gray-800 text-[18px]">{data.title}</p>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <FaClock className="w-3.5 h-3.5" />
            <span>{data.timeAgo}</span>
          </div>
          {data.status && (
            <>
              {data.status.type === "badge" && data.status.label && (
                <span
                  className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${colors.badgeBg} ${colors.badgeText}`}
                >
                  {data.status.label}
                </span>
              )}
              {data.status.type === "icon" && data.status.icon && (
                <data.status.icon className={`w-5 h-5 ${colors.iconText}`} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Export ---

export default function ActivityStream() {
  return (
    <div className="bg-slate-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Image
          src={"/icons/Group1022.png"}
          alt="Activity Icon"
          width={40}
          height={40}
          className="w-12 h-12 object-contain"
          unoptimized
        />
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-medium text-gray-900">
              AI Activity Stream
            </h2>
            <span className="bg-blue-100 text-blue-500 font-medium text-xs px-2.5 py-1 rounded-full">
              Live
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            AIVA is working in the background
          </p>
        </div>
      </div>

      {/* Activity List */}
      <div className="flex flex-col gap-4">
        {activityData.map((item) => (
          <ActivityItem key={item.id} data={item} />
        ))}
      </div>

      <div className="border-t border-gray-300 mt-8"></div>
      <div className="mt-8 bg-indigo-50/80 p-6 rounded-3xl flex items-start md:items-center gap-3 text-indigo-900 border border-indigo-200">
        {/* <Brain className="w-6 h-6 text-pink-500 shrink-0 mt-0.5 md:mt-0" /> */}
        <Image
          src={"/icons/Brain.png"}
          alt="Activity Icon"
          width={40}
          height={40}
          className="w-5 h-5 object-contain"
          unoptimized
        />
        <p className="text-[18px] leading-relaxed">
          <span className="font-semibold">AIVA Summary:</span> I&apos;ve drafted{" "}
          <span className="font-semibold">64 emails</span>, sent{" "}
          <span className="font-semibold">18</span>, and detected{" "}
          <span className="font-semibold">2 positive replies</span>. Your
          outreach is on track.
        </p>
      </div>
    </div>
  );
}
