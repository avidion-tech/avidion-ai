"use client";

import React from "react";
import { Search } from "lucide-react";

// --- Types & Data ---
type ClassificationStatus =
  | "Interested"
  | "Paused"
  | "Bounce"
  | "Auto-reply"
  | "Not Interested";

interface EmailItem {
  id: string;
  contactName: string;
  contactCompany: string;
  subject: string;
  snippet: string;
  classification: ClassificationStatus;
  subClassification: string;
  time: string;
}

const MOCK_EMAILS: EmailItem[] = [
  {
    id: "1",
    contactName: "Sarah Johnson",
    contactCompany: "TectStart",
    subject: "Re: Quick question about sales automation",
    snippet:
      "Thanks for reaching out! This sounds interesting. Can we schedule a call next week to discuss?",
    classification: "Interested",
    subClassification: "Positive - Meeting Intent",
    time: "2 hours ago",
  },
  {
    id: "2",
    contactName: "Mike Chen",
    contactCompany: "LogiFlow",
    subject: "Re: Helping logistics teams scale",
    snippet:
      "Not interested at the moment, but please check back in Q2 next year.",
    classification: "Paused",
    subClassification: "Negative - Future Interest",
    time: "5 hours ago",
  },
  {
    id: "3",
    contactName: "Emily Davis",
    contactCompany: "HealthTech Solutions",
    subject: "Re: Market expansion support",
    snippet:
      "Could you send me more information about pricing and case studies?",
    classification: "Interested",
    subClassification: "Positive - Info Request",
    time: "1 day ago",
  },
  {
    id: "4",
    contactName: "John Smith",
    contactCompany: "Example Corp",
    subject: "Delivery failed",
    snippet: "Email bounced - invalid address",
    classification: "Bounce",
    subClassification: "Technical - Hard Bounce",
    time: "2 days ago",
  },
  {
    id: "5",
    contactName: "Alex Rodriguez",
    contactCompany: "FinStart",
    subject: "Re: Scaling your outbound",
    snippet:
      "This is exactly what I need! When can we hop on a call? I have some time this Thursday.",
    classification: "Interested",
    subClassification: "Positive - Meeting Request",
    time: "3 hours ago",
  },
  {
    id: "6",
    contactName: "Lisa Anderson",
    contactCompany: "MarketCo",
    subject: "Auto-reply: Out of office",
    snippet:
      "I am currently out of the office with limited access to email. I will return on Monday.",
    classification: "Auto-reply",
    subClassification: "Neutral - OOO",
    time: "6 hours ago",
  },
  {
    id: "7",
    contactName: "David Kim",
    contactCompany: "Startup Inc",
    subject: "Re: B2B outreach solutions",
    snippet:
      "This looks promising. Can you share some ROI data from your existing customers?",
    classification: "Interested",
    subClassification: "Positive - Info Request",
    time: "4 hours ago",
  },
  {
    id: "8",
    contactName: "Rachel Green",
    contactCompany: "Enterprise Solutions",
    subject: "Re: Automating sales workflows",
    snippet: "We already use a similar tool, but thank you for reaching out.",
    classification: "Not Interested",
    subClassification: "Negative - Using Competitor",
    time: "1 day ago",
  },
];

const TABS = ["All (8)", "Unread (4)", "Interested (4)", "Bounces (1)"];

// --- Props ---
interface InboxTableProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function InboxTable({
  activeTab,
  setActiveTab,
}: InboxTableProps) {
  return (
    <div className="bg-slate-50 rounded-3xl shadow-sm border border-slate-100 flex flex-col w-full overflow-hidden">
      {/* Search Bar Section */}
      <div className="p-6 pb-2 mb-6">
        <div className="w-full relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, company or subject..."
            className="w-full pl-11 pr-4 py-3 bg-gray-200 border-none rounded-3xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-slate-100 overflow-x-auto scrollbar-hide">
        <div className="flex gap-12 min-w-max">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="border-b border-slate-100 bg-gray-200 text-sm font-medium text-slate-700">
              <th className="px-6 py-7 w-[20%]">Contact</th>
              <th className="px-6 py-7 w-[35%]">Subject</th>
              <th className="px-6 py-7 w-[20%]">AI Classification</th>
              <th className="px-6 py-7 w-[10%]">Time</th>
              <th className="px-6 py-7 w-[15%]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {MOCK_EMAILS.map((email) => (
              <tr
                key={email.id}
                className="hover:bg-slate-50/80 transition-colors group"
              >
                {/* Contact Column - Changed align-top to align-middle */}
                <td className="px-6 py-5 align-middle">
                  <div className="font-bold text-slate-700 text-sm">
                    {email.contactName}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">
                    {email.contactCompany}
                  </div>
                </td>

                {/* Subject Column - Changed align-top to align-middle */}
                <td className="px-6 py-5 align-middle">
                  <div className="font-semibold text-slate-700 text-sm mb-1">
                    {email.subject}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pr-4">
                    {email.snippet}
                  </p>
                </td>

                {/* Classification Column - Changed align-top to align-middle */}
                <td className="px-6 py-5 align-middle">
                  <Badge type={email.classification} />
                  <div className="text-[11px] text-slate-500 mt-2 font-medium">
                    {email.subClassification}
                  </div>
                </td>

                {/* Time Column - Changed align-top to align-middle */}
                <td className="px-6 py-5 align-middle text-xs text-slate-500 font-medium">
                  {email.time}
                </td>

                {/* Actions Column - Changed align-top to align-middle */}
                <td className="px-6 py-5 align-middle">
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                      Read
                    </button>
                    <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                      Override
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Helper component for badges
function Badge({ type }: { type: ClassificationStatus }) {
  const styles = {
    Interested: "bg-emerald-50 text-emerald-600",
    Paused: "bg-amber-50 text-amber-600",
    Bounce: "bg-red-50 text-red-600",
    "Auto-reply": "bg-slate-100 text-slate-600",
    "Not Interested": "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${styles[type]}`}
    >
      {type}
    </span>
  );
}
