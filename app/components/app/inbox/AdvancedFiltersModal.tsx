"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AdvancedFiltersModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdvancedFiltersModal({
  open,
  onOpenChange,
}: AdvancedFiltersModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Responsive Changes:
        1. w-[95%] and max-w... ensures it doesn't touch edges on mobile.
        2. rounded-2xl on mobile, rounded-[24px] on desktop (sm).
        3. p-4 on mobile, p-0 on internal divs (managed by flex gap usually, but here distinct).
      */}
      <DialogContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-[95%] max-w-[95vw] sm:max-w-[600px] bg-white p-0 gap-0 overflow-hidden rounded-2xl sm:rounded-[24px] outline-none border-0 shadow-xl"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 pb-2">
          <DialogHeader>
            <DialogTitle className="text-lg font-medium text-gray-700">
              Advanced Filters
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-sm mt-1">
              Apply advanced filters to refine your inbox view
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Body Content */}
        {/* max-h adjusted to be responsive so keyboard doesn't hide content on mobile */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
          {/* Date Range */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Date Range
            </Label>
            <Select defaultValue="all-time">
              <SelectTrigger className="w-full h-11 bg-gray-100 border-gray-200 focus:ring-blue-500 rounded-full text-gray-600 text-xs">
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time" className="text-xs">
                  All Time
                </SelectItem>
                <SelectItem value="last-7-days" className="text-xs">
                  Last 7 Days
                </SelectItem>
                <SelectItem value="last-30-days" className="text-xs">
                  Last 30 Days
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Campaign */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Campaign
            </Label>
            <Select defaultValue="all">
              <SelectTrigger className="w-full h-11 bg-gray-100 border-gray-200 focus:ring-blue-500 rounded-full text-gray-600 text-xs">
                <SelectValue placeholder="Select campaign" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all" className="text-xs">
                  All Campaigns
                </SelectItem>
                <SelectItem value="campaign-a" className="text-xs">
                  Q4 Outreach
                </SelectItem>
                <SelectItem value="campaign-b" className="text-xs">
                  Follow-ups
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Intent Classification */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Intent Classification
            </Label>
            {/* Reduced gap-x for mobile so columns don't squish */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-8 mt-1">
              {/* Column 1 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="interested"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="interested"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Interested
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="not-interested"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="not-interested"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Not Interested
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="auto-reply"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="auto-reply"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Auto-reply
                  </label>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="not-now"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="not-now"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Not Now
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="bounce"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="bounce"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Bounce
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="question"
                    className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
                  />
                  <label
                    htmlFor="question"
                    className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Question
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Min Confidence */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Minimum AI Confidence Level
            </Label>
            <Select defaultValue="any">
              <SelectTrigger className="w-full h-11 bg-gray-100 border-gray-200 focus:ring-blue-500 rounded-full text-gray-600 text-xs">
                <SelectValue placeholder="Select confidence" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any" className="text-xs">
                  Any Confidence (0%+)
                </SelectItem>
                <SelectItem value="high" className="text-xs">
                  High (80%+)
                </SelectItem>
                <SelectItem value="medium" className="text-xs">
                  Medium (50%+)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Filters */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Additional Filters
            </Label>
            <div className="flex items-center space-x-2 mt-1">
              <Checkbox
                id="attachments"
                className="bg-gray-100 border-gray-300 data-[state=checked]:bg-blue-600"
              />
              <label
                htmlFor="attachments"
                className="text-xs text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Has attachments
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* Stack buttons on mobile (flex-col-reverse), Row on desktop */}
        <div className="p-4 sm:p-6 pt-2 border-t border-gray-100 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between sm:items-center bg-white">
          <Button
            variant="ghost"
            className="w-full sm:w-auto text-gray-500 hover:text-gray-700 hover:bg-gray-50 px-4 h-11 font-medium rounded-full"
            onClick={() => {
              /* Handle reset */
            }}
          >
            Reset Filters
          </Button>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto border-gray-200 text-gray-700 hover:bg-gray-50 px-6 h-11 font-medium rounded-full"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 h-11 font-medium rounded-full shadow-sm shadow-blue-200"
              onClick={() => onOpenChange(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
