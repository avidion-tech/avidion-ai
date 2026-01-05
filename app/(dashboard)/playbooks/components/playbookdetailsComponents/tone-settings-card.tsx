"use client";

import React, { useState } from "react";

// Internal reusable component for the selectable pills
const SelectionPill = ({
  label,
  isSelected,
  onClick,
}: {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3.5 rounded-full border-2 text-[15px] transition-all duration-200 text-left whitespace-nowrap flex-1 md:flex-none outline-none ${
        isSelected
          ? "border-blue-500 bg-blue-50 text-blue-600 font-medium shadow-sm" // Active State: Vibrant Blue Border & Text
          : "border-slate-200 bg-gray-50 text-slate-600 hover:border-slate-300 font-normal hover:bg-slate-50/50" // Inactive State: Light Slate Border
      }`}
    >
      {label}
    </button>
  );
};

export default function ToneSettingsCard() {
  // State handles selection
  const [primaryTone, setPrimaryTone] = useState("Concise Professional");
  const [emailLength, setEmailLength] = useState("short");

  const tones = ["Concise Professional", "Friendly", "Persuasive", "Formal"];

  const lengths = [
    { id: "ultra", label: "≤80 words (Ultra-short)" },
    { id: "short", label: "≤120 words (Short)" },
    { id: "standard", label: "≤150 words (Standard)" },
  ];

  return (
    <div className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
      <h2 className="text-[20px] font-semibold text-slate-600 mb-6">
        Tone Settings
      </h2>

      <div className="space-y-6">
        {/* Primary Tone Section */}
        <div className="space-y-3">
          <label className="block text-[16px] text-slate-600 ml-1">
            Primary Tone
          </label>
          {/* <div className="flex flex-wrap gap-3 md:gap-4 max-w-full"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {tones.map((tone) => (
              <SelectionPill
                key={tone}
                label={tone}
                isSelected={primaryTone === tone}
                onClick={() => setPrimaryTone(tone)}
              />
            ))}
          </div>
        </div>

        {/* Email Length Section */}
        <div className="space-y-3">
          <label className="block text-[16px] text-slate-600 ml-1">
            Email Length
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {lengths.map((len) => (
              <SelectionPill
                key={len.id}
                label={len.label}
                isSelected={emailLength === len.id}
                onClick={() => setEmailLength(len.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
