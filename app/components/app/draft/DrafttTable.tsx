"use client";

import React, { useState, useMemo } from "react";
import { Eye, Search } from "lucide-react";
// --- Types & Data ---
type EmailStatus = "Ready" | "Review";

interface EmailItem {
  id: string;
  contactName: string;
  contactEmail: string;
  contactCompany: string;
  companyColor: string; // To match the badge colors in image
  subject: string;
  preview: string;
  status: EmailStatus;
  initials: string; // For the avatar placeholder
  avatarColor: string; // For the avatar background
}

const MOCK_EMAILS: EmailItem[] = [
  {
    id: "1",
    contactName: "Sarah Johnson",
    contactEmail: "sarah@techstart.io",
    contactCompany: "TechStart",
    companyColor: "bg-blue-100 text-blue-700",
    subject: "Helping logistics teams scale outreach",
    preview:
      "Hi Sarah, I noticed TechStart recently raised Series A. Congrats! I'm reaching out because...",
    status: "Ready",
    initials: "SJ",
    avatarColor: "bg-blue-600",
  },
  {
    id: "2",
    contactName: "Mike Chen",
    contactEmail: "mike@logistics.com",
    contactCompany: "LogiFlow",
    companyColor: "bg-blue-100 text-blue-700",
    subject: "Quick question about TechStart's sales automation",
    preview:
      "Hi Mike, I came across LogiFlow while researching companies in the logistics space...",
    status: "Ready",
    initials: "MC",
    avatarColor: "bg-blue-600",
  },
  {
    id: "3",
    contactName: "Emily Devis", // Typo in image matched for accuracy
    contactEmail: "emily@healthtech.com",
    contactCompany: "HealthTech Solutions",
    companyColor: "bg-blue-100 text-blue-700",
    subject: "Re: HealthTech's market expansion",
    preview:
      "Hi Emily, Saw the news about HealthTech expanding to the East Coast - exciting times...",
    status: "Review",
    initials: "ED",
    avatarColor: "bg-blue-600",
  },
  {
    id: "4",
    contactName: "Alex Rodriguez",
    contactEmail: "alex@finstart.co",
    contactCompany: "FinStart",
    companyColor: "bg-blue-100 text-blue-700",
    subject: "Scaling FinStart's outbound",
    preview:
      "Hi Alex, I've been following FinStart's journey - love what you're building in fintech...",
    status: "Ready",
    initials: "AR",
    avatarColor: "bg-blue-600",
  },
];

function EmailCard({ data }: { data: EmailItem }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Header: Avatar, Name, Email */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-3">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${data.avatarColor}`}
          >
            {data.initials}
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {data.contactName}
            </h3>
            <p className="text-xs text-slate-400">{data.contactEmail}</p>
            <div className="mb-5 mt-1">
              <span
                className={`inline-block px-2 py-1 rounded-full text-[10px] font-medium ${data.companyColor}`}
              >
                {data.contactCompany}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Company Badge */}

      {/* Content */}
      <div className="mb-8 flex-1">
        <div className="mb-3">
          <p className="text-xs font-medium text-slate-400 uppercase mb-1">
            Subject:
          </p>
          <p className="text-sm font-semibold text-slate-700 leading-snug">
            {data.subject}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium text-slate-400 uppercase mb-1">
            Preview:
          </p>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {data.preview}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
        <span
          className={`px-4 py-1.5 rounded-full text-xs font-bold ${
            data.status === "Ready"
              ? "bg-emerald-50 text-emerald-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {data.status === "Ready" ? "Ready" : "Review"}
        </span>

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 transition-colors">
          <Eye size={14} />
          View
        </button>
      </div>
    </div>
  );
}
// --- Props ---
interface InboxGridProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}
export default function DraftTable({
  activeTab,
  setActiveTab,
}: InboxGridProps) {
  // Local state for search
  const [searchQuery, setSearchQuery] = useState("");

  // 1. Calculate Counts Dynamically
  const counts = useMemo(() => {
    return {
      All: MOCK_EMAILS.length,
      Ready: MOCK_EMAILS.filter((e) => e.status === "Ready").length,
      Review: MOCK_EMAILS.filter((e) => e.status === "Review").length,
    };
  }, []);

  // 2. Define Tab Structure
  const tabsList = [
    { key: "All", label: `All (${counts.All})` },
    { key: "Ready", label: `Ready to Send (${counts.Ready})` },
    { key: "Review", label: `Needs Review (${counts.Review})` },
  ];

  // 3. Filter Emails
  const filteredEmails = MOCK_EMAILS.filter((email) => {
    const matchesTab =
      activeTab === "All"
        ? true
        : activeTab === "Ready"
        ? email.status === "Ready"
        : activeTab === "Review"
        ? email.status === "Review"
        : true;

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
        {filteredEmails.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-8">
            {filteredEmails.map((email) => (
              <EmailCard key={email.id} data={email} />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-slate-400">
            <p>No emails found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
