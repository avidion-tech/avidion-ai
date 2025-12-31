"use client";

import React, { useState, useMemo } from "react";
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
  isRead: boolean; // Added this property
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
    isRead: false,
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
    isRead: true,
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
    isRead: false,
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
    isRead: false,
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
    isRead: false,
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
    isRead: true,
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
    isRead: true,
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
    isRead: true,
  },
];

// --- Props ---
interface InboxTableProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function InboxTable({
  activeTab,
  setActiveTab,
}: InboxTableProps) {
  // Local state for search
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Calculate Counts Dynamically
  const counts = useMemo(() => {
    return {
      All: MOCK_EMAILS.length,
      Unread: MOCK_EMAILS.filter((e) => !e.isRead).length,
      Interested: MOCK_EMAILS.filter((e) => e.classification === "Interested")
        .length,
      Bounces: MOCK_EMAILS.filter((e) => e.classification === "Bounce").length,
    };
  }, []);

  // 2. Define Tab Structure with Counts
  const tabsList = [
    { key: "All", label: `All (${counts.All})` },
    { key: "Unread", label: `Unread (${counts.Unread})` },
    { key: "Interested", label: `Interested (${counts.Interested})` },
    { key: "Bounces", label: `Bounces (${counts.Bounces})` },
  ];

  // 3. Filter Emails based on Tab AND Search
  const filteredEmails = MOCK_EMAILS.filter((email) => {
    // Tab Filter
    const matchesTab =
      activeTab === "All"
        ? true
        : activeTab === "Unread"
        ? !email.isRead
        : activeTab === "Interested"
        ? email.classification === "Interested"
        : activeTab === "Bounces"
        ? email.classification === "Bounce"
        : true;

    // Search Filter
    const matchesSearch =
      email.contactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.contactCompany.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-200 border-none rounded-3xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 border-b border-slate-100 overflow-x-auto scrollbar-hide">
        <div className="flex gap-12 min-w-max">
          {tabsList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-4 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.key
                  ? "border-blue-600 text-slate-900"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
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
            {filteredEmails.length > 0 ? (
              filteredEmails.map((email) => (
                <tr
                  key={email.id}
                  className={`hover:bg-slate-50/80 transition-colors group ${
                    !email.isRead ? "bg-white" : "bg-slate-50/30"
                  }`}
                >
                  {/* Contact Column */}
                  <td className="px-6 py-5 align-middle">
                    <div className="flex items-center gap-2">
                      {/* Unread Indicator Dot */}
                      {!email.isRead && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      )}
                      <div>
                        <div
                          className={`text-sm text-slate-700 ${
                            !email.isRead ? "font-bold" : "font-medium"
                          }`}
                        >
                          {email.contactName}
                        </div>
                        <div className="text-xs text-slate-500 mt-1 font-medium">
                          {email.contactCompany}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Subject Column */}
                  <td className="px-6 py-5 align-middle">
                    <div
                      className={`text-sm text-slate-700 mb-1 ${
                        !email.isRead ? "font-bold" : "font-medium"
                      }`}
                    >
                      {email.subject}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed pr-4 line-clamp-1">
                      {email.snippet}
                    </p>
                  </td>

                  {/* Classification Column */}
                  <td className="px-6 py-5 align-middle">
                    <Badge type={email.classification} />
                    <div className="text-[11px] text-slate-500 mt-2 font-medium">
                      {email.subClassification}
                    </div>
                  </td>

                  {/* Time Column */}
                  <td className="px-6 py-5 align-middle text-xs text-slate-500 font-medium">
                    {email.time}
                  </td>

                  {/* Actions Column */}
                  <td className="px-6 py-5 align-middle">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                        Read
                      </button>
                      <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                        Override
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Empty State
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center">
                  <p className="text-slate-500 text-sm">No emails found.</p>
                </td>
              </tr>
            )}
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
