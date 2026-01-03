import { Lightbulb } from "lucide-react";
import React from "react";

const CampaignInsightsCard = () => {
  return (
    <>
      <div className="bg-slate-50 rounded-2xl p-4 flex items-start gap-4 shadow-sm mt-8">
        <div className="flex-shrink-0">
          <div className="bg-[#3B82F6] h-16 w-16 md:h-20 md:w-20 rounded-2xl flex items-center justify-center shadow-blue-200 shadow-lg">
            <Lightbulb className="text-white w-8 h-8 md:w-10 md:h-10 stroke-[2.5]" />
          </div>
        </div>

        <div className="flex flex-col flex-grow">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            AI Campaign Insights
          </h2>

          <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
            &quot;SaaS CEOs Connect&quot; campaign shows 23% higher reply rate
            when emails are sent on Tuesday mornings. Consider adjusting send
            times for other campaigns.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 md:flex-none px-6 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
              Apply Suggestions
            </button>

            <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-6 py-2.5 rounded-full text-md transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignInsightsCard;
