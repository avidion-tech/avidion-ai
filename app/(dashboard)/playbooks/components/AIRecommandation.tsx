import React from "react";
import { Sparkles } from "lucide-react";

export function AiRecommendations() {
  const recommendations = [
    {
      id: 1,
      title: "Follow-up #2 after 4 days improved reply rate by 9%",
      action: "Apply to all playbooks",
      impact: "High Impact",
      impactColor: "bg-green-100 text-green-500",
    },
    {
      id: 2,
      title: "Subject lines under 7 words perform 12% better in logistics",
      action: "Update templates",
      impact: "High Impact",
      impactColor: "bg-green-100 text-green-500",
    },
    {
      id: 3,
      title: "Switch tone from formal → friendly for startups audience",
      action: "Create variant",
      impact: "Medium Impact",
      impactColor: "bg-orange-100 text-orange-500",
    },
  ];

  return (
    <div className="w-full bg-slate-50 rounded-3xl p-6 sm:p-8 border border-gray-100">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-blue-600 fill-blue-600" />
        <p className="text-2xl font-medium text-gray-800">
          AI Learning & Recommendations
        </p>
      </div>

      {/* Recommendations List */}
      <div className="space-y-5">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-colors"
          >
            {/* Left Content */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-start sm:items-center gap-3 flex-wrap">
                <span className="text-gray-700 font-medium text-[18px]">
                  {rec.title}
                </span>
                <span
                  className={`text-[13px] px-2.5 py-1 font-medium rounded-full ${rec.impactColor}`}
                >
                  {rec.impact}
                </span>
              </div>
              <span className="text-sm text-gray-500">{rec.action}</span>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-600 hover:to-blue-600 text-sm font-medium rounded-full transition-all shadow-sm shadow-blue-200">
                Apply
              </button>
              <button className="px-6 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-full transition-colors">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
