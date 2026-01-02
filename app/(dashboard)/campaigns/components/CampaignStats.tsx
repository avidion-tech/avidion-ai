"use client";

import React from "react";

// --- Types & Data ---

interface StatData {
  id: number;
  label: string;
  value: string;
  valueColor: string; // Tailwind class for the text color
}

const statsData: StatData[] = [
  {
    id: 1,
    label: "Emails Sent",
    value: "12,340",
    valueColor: "text-purple-600", // Matches the Purple in image
  },
  {
    id: 2,
    label: "Open Rate",
    value: "61%",
    valueColor: "text-pink-500", // Matches the Pink in image
  },
  {
    id: 3,
    label: "Reply Rate",
    value: "8.4%",
    valueColor: "text-emerald-500", // Matches the Green in image
  },
  {
    id: 4,
    label: "Meetings Booked",
    value: "42",
    valueColor: "text-indigo-500", // Matches the Blue-ish Purple in image
  },
  {
    id: 5,
    label: "Bounce Rate",
    value: "2.3%",
    valueColor: "text-red-500", // Matches the Red in image
  },
  {
    id: 6,
    label: "Conversion Rate",
    value: "6%",
    valueColor: "text-amber-500", // Matches the Orange/Yellow in image
  },
];

// --- Sub-Component ---

interface StatCardProps {
  data: StatData;
}

function StatCard({ data }: StatCardProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-[32px] flex flex-col justify-between h-full min-h-[140px] shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Label Section - constrained width to force wrapping if needed, like the image */}
      <div className="text-gray-600 font-medium text-base leading-tight max-w-[100px]">
        {data.label}
      </div>

      {/* Value Section */}
      <div className={`text-3xl font-medium ${data.valueColor}`}>
        {data.value}
      </div>
    </div>
  );
}

// --- Main Component ---

export default function CampaignStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 w-full">
      {statsData.map((stat) => (
        <StatCard key={stat.id} data={stat} />
      ))}
    </div>
  );
}
