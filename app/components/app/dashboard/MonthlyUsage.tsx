import React from "react";

interface MonthlyUsageProps {
  current?: number;
  total?: number;
}

const MonthlyUsage = ({ current = 2500, total = 3000 }: MonthlyUsageProps) => {
  // Calculate percentage safely
  const percentage = total > 0 ? Math.min(100, (current / total) * 100) : 0;

  return (
    <div className="bg-slate-50 p-6 md:p-10 rounded-[2rem] shadow-sm flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
      {/* Left Side: Usage Info & Progress Bar */}
      <div className="flex-1 w-full">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 font-medium">Monthly Email Usage</span>
          <span className="text-gray-500 text-md font-medium">
            {current.toLocaleString()} / {total.toLocaleString()}
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="h-3 w-full bg-blue-50 rounded-full overflow-hidden">
          {/* Progress Bar Fill */}
          <div
            className="h-full bg-[#3162C6] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Right Side: Action Button */}
      <div className="flex-none">
        <button className="flex-1 md:flex-none px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-1 whitespace-nowrap">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default MonthlyUsage;
