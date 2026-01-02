"use client";

import React from "react";
import Image from "next/image";

// --- Types & Data ---

interface StatData {
  id: number;
  label: string;
  value: string;
  icon: string; // Path to the image in your public folder
  labelColor: string;
  iconBg: string; // Background color for the icon container
}

const statsData: StatData[] = [
  {
    id: 1,
    label: "Total Replies",
    value: "8",
    icon: "/icons/Group3.png", // Make sure this matches your file name
    labelColor: "text-blue-500",
    iconBg: "bg-blue-500", // Updated to solid color to match your image
  },
  {
    id: 2,
    label: "Unread",
    value: "4",
    icon: "/icons/Group2.png",
    labelColor: "text-amber-500",
    iconBg: "bg-amber-500",
  },
  {
    id: 3,
    label: "Interested",
    value: "4",
    icon: "/icons/Group4.png",
    labelColor: "text-green-500",
    iconBg: "bg-green-500",
  },
  {
    id: 4,
    label: "Bounces",
    value: "1",
    icon: "/icons/Group1.png",
    labelColor: "text-red-500",
    iconBg: "bg-red-500",
  },
];

// --- Sub-Component ---

interface StatCardProps {
  data: StatData;
}

function StatCard({ data }: StatCardProps) {
  return (
    <div className="bg-slate-50 p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between transition-shadow hover:shadow-md">
      <div>
        <p className={`${data.labelColor} font-medium text-sm mb-1`}>
          {data.label}
        </p>
        <h2 className="text-3xl font-medium text-slate-800">{data.value}</h2>
      </div>

      {/* Icon Container */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center`}>
        <Image
          src={data.icon}
          alt={data.label}
          width={40}
          height={40}
          unoptimized
        />
      </div>
    </div>
  );
}

// --- Main Component ---

export default function InboxStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsData.map((stat) => (
        <StatCard key={stat.id} data={stat} />
      ))}
    </div>
  );
}
