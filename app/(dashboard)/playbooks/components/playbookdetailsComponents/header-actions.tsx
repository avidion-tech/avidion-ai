import React from "react";

export default function HeaderActions() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        // variant="outline"
        className="flex-1 md:flex-none px-4 py-2 md:px-4 md:py-3 bg-slate-50 border border-blue-300 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap"
      >
        Duplicate
      </button>
      <button
        // variant="outline"
        className="flex-1 md:flex-none px-4 py-2 md:px-4 md:py-3 bg-slate-50 border border-blue-300 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap"
      >
        Export
      </button>
      <button className="flex-1 md:flex-none px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
        Save Changes
      </button>
    </div>
  );
}
