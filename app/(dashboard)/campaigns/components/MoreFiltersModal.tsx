"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X, Calendar, Check } from "lucide-react";

interface MoreFiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MoreFiltersModal({
  open,
  onOpenChange,
}: MoreFiltersModalProps) {
  // Helper to close the modal
  const handleClose = () => onOpenChange(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-[95%] max-w-[600px] bg-white p-0 gap-0 overflow-hidden rounded-2xl sm:rounded-[24px] outline-none border-0 shadow-2xl focus:outline-none [&>button]:hidden"
      >
        <VisuallyHidden>
          <DialogTitle>Advanced Campaign Filters</DialogTitle>
        </VisuallyHidden>

        {/* --- Header Section --- */}
        <div className="p-10 pb-4 flex items-start justify-between">
          <div>
            <h2 className="text-xl font-medium text-gray-700">
              Advanced Campaign Filters
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Refine your campaign search with detailed criteria
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- Body Section --- */}
        <div className="p-10 pt-2 space-y-6 overflow-y-auto max-h-[65vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {/* Section: Start Date Range */}
          <div className="space-y-1">
            <h3 className="text-md font-medium text-gray-600">
              Start Date Range
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm text-gray-500 font-medium ml-1">
                  From
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="w-full h-10 bg-gray-50 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-700"
                  />
                  <Calendar
                    size={16}
                    className="absolute right-4 top-3 text-gray-700 pointer-events-none"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  To
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    className="w-full h-10 bg-gray-50 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-700"
                  />
                  <Calendar
                    size={16}
                    className="absolute right-4 top-3 text-gray-700 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Performance Metrics */}
          <div className="space-y-1">
            <h3 className="text-md font-medium text-gray-600">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Min Reply Rate (%)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  className="w-full h-10 bg-gray-50 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Min Meetings Booked
                </label>
                <input
                  type="number"
                  placeholder="e.g., 10"
                  className="w-full h-10 bg-gray-50 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Min Emails Sent
                </label>
                <input
                  type="number"
                  placeholder="e.g., 100"
                  className="w-full h-10 bg-gray-100 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Max Bounce Rate (%)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 5"
                  className="w-full h-10 bg-gray-100 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm text-gray-700 outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Section: Playbooks */}
          <div className="space-y-1">
            <h3 className="text-md font-medium text-gray-600">Playbooks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">B2B Freight v2</span>
              </label>
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">Tech Demo v1</span>
              </label>
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">Healthcare v3</span>
              </label>
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">Enterprise v2</span>
              </label>
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">Startup outreach</span>
              </label>
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-colors group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">Finetech v1</span>
              </label>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-md font-medium text-gray-600">
              Lead Count Range
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Minimum Leads
                </label>
                <input
                  type="number"
                  placeholder="e.g., 100"
                  className="w-full h-10 bg-gray-100 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 font-medium ml-1">
                  Maximum Leads
                </label>
                <input
                  type="number"
                  placeholder="e.g., 1000"
                  className="w-full h-10 bg-gray-100 hover:bg-gray-100 focus:bg-white border-none rounded-full px-5 text-sm outline-none ring-1 ring-transparent focus:ring-blue-500 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
          {/* Section: Additional Filters */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-600">
              Additional Filters
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50 border border-transparent hover:border-blue-400 transition-all group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">
                  Only campaigns with A/B tests
                </span>
              </label>

              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50 border border-transparent hover:border-blue-400 transition-all group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">
                  High performers (reply rate &gt; 8%)
                </span>
              </label>

              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50 border border-transparent hover:border-blue-400 transition-all group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">
                  Recently created (last 30 days)
                </span>
              </label>

              <label className="flex items-center gap-2 p-5 h-3 bg-gray-100 rounded-full cursor-pointer hover:bg-blue-50 border border-transparent hover:border-blue-400 transition-all group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer w-4 h-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white transition-all checked:bg-blue-600 checked:border-blue-600"
                  />
                  <Check
                    size={10}
                    className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    strokeWidth={3}
                  />
                </div>
                <span className="text-sm text-gray-700">
                  Has scheduled follow-ups
                </span>
              </label>
            </div>
          </div>

          {/* Section: Active Filters */}
          <div className="px-6 py-4 bg-blue-50 rounded-2xl border border-blue-300">
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-md font-semibold text-gray-900">
                Active Filters
              </h3>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                Clear All
              </button>
            </div>
            <p className="text-sm text-gray-500">No filters applied yet</p>
          </div>
        </div>

        <div className="px-10 pb-8">
          <div className="border-t border-gray-300"></div>
          <div className="pt-3 flex items-center justify-between mt-2">
            <button
              onClick={handleClose}
              className="px-5 h-10 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-3">
              <button className="px-5 h-10 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Reset Filters
              </button>
              <button
                onClick={handleClose}
                className="px-5 h-10 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
