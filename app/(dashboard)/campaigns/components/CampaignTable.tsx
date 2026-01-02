"use client";

import React from "react";
import { MoreVertical } from "lucide-react";

// --- Types & Data ---

type CampaignStatus = "Running" | "Paused" | "Completed";

interface Campaign {
  id: number;
  name: string;
  replyRate: string; // Subtext under name
  playbook: string;
  leads: string;
  status: CampaignStatus;
  sent: number;
  replies: number;
  meetings: number;
  startDate: string; // Multi-line date in UI, string here for simplicity
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Logistics Outreach Q1",
    replyRate: "5.7% reply rate",
    playbook: "B2B Freight v2",
    leads: "800",
    status: "Running",
    sent: 560,
    replies: 32,
    meetings: 9,
    startDate: "02-\nNov-\n25",
  },
  {
    id: 2,
    name: "SaaS CEOs Connect",
    replyRate: "7.1% reply rate",
    playbook: "Tech Demo v1",
    leads: "1,200",
    status: "Paused",
    sent: 980,
    replies: 70,
    meetings: 14,
    startDate: "26-\nOct-\n25",
  },
  {
    id: 3,
    name: "Healthcare Partners",
    replyRate: "8.8% reply rate",
    playbook: "Healthcare v3",
    leads: "450",
    status: "Running",
    sent: 320,
    replies: 28,
    meetings: 6,
    startDate: "05-\nNov-\n25",
  },
  {
    id: 4,
    name: "Enterprise Demo Requests",
    replyRate: "13.1% reply rate",
    playbook: "Enterprise Outreach",
    leads: "320",
    status: "Completed",
    sent: 320,
    replies: 42,
    meetings: 11,
    startDate: "15-\nOct-\n25",
  },
];

// --- Helper Components ---

const StatusBadge = ({ status }: { status: CampaignStatus }) => {
  const styles = {
    Running: "bg-emerald-50 text-emerald-600",
    Paused: "bg-amber-50 text-amber-600", // Matches the yellowish-orange
    Completed: "bg-blue-50 text-blue-600",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
};

// --- Main Component ---

export default function CampaignTable() {
  return (
    <div className="w-full bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
      {/* Wrapper for horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Campaign Name
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Playbook
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Leads
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Status
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Sent
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Replies
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Meetings
              </th>
              <th className="text-left py-5 px-6 text-sm font-semibold text-gray-800">
                Start Date
              </th>
              <th className="text-center py-5 px-6 text-sm font-semibold text-gray-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {campaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="group hover:bg-gray-50/50 transition-colors"
              >
                {/* Campaign Name & Subtext */}
                <td className="py-5 px-6 align-middle">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium text-sm">
                      {campaign.name}
                    </span>
                    <span className="text-gray-400 text-xs mt-0.5">
                      {campaign.replyRate}
                    </span>
                  </div>
                </td>

                {/* Playbook */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600">
                  <div className="max-w-[140px] leading-snug">
                    {campaign.playbook}
                  </div>
                </td>

                {/* Leads */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600">
                  {campaign.leads}
                </td>

                {/* Status */}
                <td className="py-5 px-6 align-middle">
                  <StatusBadge status={campaign.status} />
                </td>

                {/* Sent */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600">
                  {campaign.sent}
                </td>

                {/* Replies */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600">
                  {campaign.replies}
                </td>

                {/* Meetings */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600">
                  {campaign.meetings}
                </td>

                {/* Start Date (Formatted with line breaks) */}
                <td className="py-5 px-6 align-middle text-sm text-gray-600 whitespace-pre-line leading-tight">
                  {campaign.startDate.replace(/-/g, "-\n")}
                </td>

                {/* Actions */}
                <td className="py-5 px-6 align-middle text-center">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
