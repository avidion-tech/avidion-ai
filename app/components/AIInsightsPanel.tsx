import React from "react";
import Image from "next/image";

// 1. Define the data structure so we don't repeat code
const insightsData = [
  {
    id: 1,
    title: "Follow-up #2 at Day 4 performs best",
    description:
      "Your Day-4 follow-up got 26% more replies. Consider moving other follow-ups earlier.",
    priority: "High",
  },
  {
    id: 2,
    title: "Subject lines under 7 words drive 18% more opens",
    description:
      "Short, direct subject lines are working better across all campaigns.",
    priority: "High",
  },
  {
    id: 3,
    title: "Tuesday 10 AM sends show highest engagement",
    description: "Emails sent on Tuesday mornings have a 22% higher open rate.",
    priority: "Medium",
  },
];

// 2. Reusable Card Component
interface InsightCardProps {
  title: string;
  description: string;
  priority: string;
}

const InsightCard = ({ title, description, priority }: InsightCardProps) => {
  // Determine badge color based on priority (optional enhancement)
  const badgeColors =
    priority === "High"
      ? "bg-blue-100 text-blue-700"
      : "bg-blue-50 text-blue-600";

  return (
    <div className="bg-white p-4 md:p-6 rounded-[2rem] shadow-sm border border-transparent hover:border-blue-100 transition-all duration-300">
      {/* Header & Priority Badge */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-4 mb-1">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-800 leading-tight">
          {title}
        </h3>
        <span
          className={`self-start md:self-auto inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeColors}`}
        >
          {priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

      {/* Action Buttons */}
      {/* Responsive: Flex column on mobile, Row on sm sizes and up */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button className="flex-1 md:flex-none px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-1 whitespace-nowrap">
          Apply to Playbook
        </button>
        <button className="flex-1 sm:flex-none inline-flex justify-center items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200 rounded-full transition-colors duration-200">
          View Data
        </button>
      </div>
    </div>
  );
};

// 3. Main Container Component
const AIInsightsPanel = () => {
  return (
    // Outer container with the specific light blue-gray background color
    <div className="bg-slate-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <Image
          src={"/icons/AiInsight.svg"}
          alt="Activity Icon"
          width={40}
          height={40}
          className="w-6 h-6 object-contain"
          unoptimized
        />
        <div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-900">
            AI Insights & Suggestions
          </h2>
        </div>
      </div>

      {/* Stack of cards */}
      <div className="space-y-4">
        {insightsData.map((insight) => (
          <InsightCard
            key={insight.id}
            title={insight.title}
            description={insight.description}
            priority={insight.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default AIInsightsPanel;
