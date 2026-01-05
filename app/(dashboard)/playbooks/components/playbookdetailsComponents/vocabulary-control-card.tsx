"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

// Reusable Tag Component
const Tag = ({
  label,
  type,
  onRemove,
}: {
  label: string;
  type: "avoid" | "prefer";
  onRemove: () => void;
}) => {
  const styles =
    type === "avoid"
      ? "bg-red-50 text-red-500 hover:bg-red-100 border-red-200"
      : "bg-green-50 text-green-400 hover:bg-green-100 border-green-200";

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[14px] font-medium transition-colors cursor-default ${styles}`}
    >
      {label}
      <button
        onClick={onRemove}
        className="hover:bg-black/5 rounded-full p-0.5 transition-colors"
      >
        <X size={14} strokeWidth={2.5} />
      </button>
    </span>
  );
};

export default function VocabularyControlCard() {
  // State for Words to Avoid
  const [avoidWords, setAvoidWords] = useState([
    "free",
    "guarantee",
    "100%",
    "limited time",
    "act now",
  ]);
  const [avoidInput, setAvoidInput] = useState("");

  // State for Preferred Terms
  const [preferredTerms, setPreferredTerms] = useState([
    "AI Employee",
    "book a quick call",
    "personalized outreach",
  ]);
  const [preferInput, setPreferInput] = useState("");

  // Handlers to add/remove tags
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    type: "avoid" | "prefer"
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (type === "avoid" && avoidInput.trim()) {
        setAvoidWords([...avoidWords, avoidInput.trim()]);
        setAvoidInput("");
      } else if (type === "prefer" && preferInput.trim()) {
        setPreferredTerms([...preferredTerms, preferInput.trim()]);
        setPreferInput("");
      }
    }
  };

  const removeTag = (index: number, type: "avoid" | "prefer") => {
    if (type === "avoid") {
      setAvoidWords(avoidWords.filter((_, i) => i !== index));
    } else {
      setPreferredTerms(preferredTerms.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="bg-slate-50 rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-100 mt-6">
      <h2 className="text-[20px] font-semibold text-slate-700 mb-6">
        Vocabulary Control
      </h2>

      <div className="space-y-8">
        {/* Section 1: Words to Avoid */}
        <div className="space-y-3">
          <label className="block text-[16px] text-slate-700 ml-1">
            Words to Avoid
          </label>

          <div className="flex flex-wrap gap-2 mb-3">
            {avoidWords.map((word, index) => (
              <Tag
                key={index}
                label={word}
                type="avoid"
                onRemove={() => removeTag(index, "avoid")}
              />
            ))}
          </div>

          <input
            type="text"
            value={avoidInput}
            onChange={(e) => setAvoidInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "avoid")}
            placeholder="Add word to avoid..."
            className="w-full bg-gray-50 border border-slate-200 rounded-full px-5 py-3.5 text-slate-700 outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-200 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Section 2: Preferred Terms */}
        <div className="space-y-3">
          <label className="block text-[16px] text-slate-700 ml-1">
            Preferred Terms
          </label>

          <div className="flex flex-wrap gap-2 mb-3">
            {preferredTerms.map((term, index) => (
              <Tag
                key={index}
                label={term}
                type="prefer"
                onRemove={() => removeTag(index, "prefer")}
              />
            ))}
          </div>

          <input
            type="text"
            value={preferInput}
            onChange={(e) => setPreferInput(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "prefer")}
            placeholder="Add preferred term..."
            className="w-full bg-gray-50 border border-slate-200 rounded-full px-5 py-3.5 text-slate-700 outline-none focus:ring-2 focus:ring-green-500/10 focus:border-green-200 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>
    </div>
  );
}
