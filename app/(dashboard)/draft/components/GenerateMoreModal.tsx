"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Copy, Pencil, ThumbsDown, Send } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GenerateMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GenerateMoreModal({
  open,
  onOpenChange,
}: GenerateMoreModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        // Updated: rounded-3xl and max-w-[700px]
        className="w-[95%] max-w-[700px] bg-white p-0 gap-0 overflow-hidden rounded-2xl sm:rounded-[24px] outline-none border-0 shadow-2xl focus:outline-none [&>button]:hidden"
      >
        <VisuallyHidden>
          <DialogTitle>Email Preview Modal</DialogTitle>
        </VisuallyHidden>

        {/* --- Header Section --- */}
        <div className="p-8 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              {/* Avatar */}
              <div className="h-14 w-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-medium shrink-0">
                SJ
              </div>

              {/* User Info */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-gray-900 text-xl">
                    Sarah Johnson
                  </span>
                </div>
                <span className="text-gray-500 text-base">
                  sarah@techstart.io
                </span>
                <div className="mt-2">
                  <span className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    TechStart
                  </span>
                </div>
              </div>
            </div>

            {/* Custom Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Tags & Time Row */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
                SaaS Demo v2
              </span>
              <span className="inline-flex items-center rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-600">
                Ready to Send
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
                Confidence: 94%
              </span>
            </div>
            <span className="text-sm text-gray-400 font-medium">
              2 hours ago
            </span>
          </div>
        </div>

        {/* --- Content Body --- */}
        <div className="px-8 py-2 space-y-6">
          {/* Subject Line Box */}
          <div className="bg-slate-100 rounded-[24px] p-6 border border-gray-100">
            <div className="text-gray-400 text-sm mb-2 font-medium">
              Subject Line
            </div>
            <div className="text-gray-900 font-medium text-lg">
              Quick question about TechStart&apos;s sales automation
            </div>
          </div>

          {/* Email Body Box */}
          <div className="bg-slate-100 rounded-[24px] p-6 border border-gray-100 min-h-[220px]">
            <div className="text-gray-400 text-sm mb-5 font-medium">
              Email Body
            </div>
            <div className="text-gray-800 space-y-5 leading-relaxed text-base">
              <p>Hi Sarah,</p>
              <p>I noticed TechStart recently raised Series A. Congrats!</p>
              <p>
                I&apos;m reaching out because I saw you&apos;re scaling your
                sales team. Most VPs I talk to say their biggest challenge right
                now is...
              </p>
            </div>
          </div>
        </div>

        {/* --- Footer / Actions --- */}
        <div className="p-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Actions (Copy/Edit) */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="rounded-full border-gray-200 text-gray-600 hover:bg-gray-50 px-8 h-12 w-full sm:w-auto text-base font-medium"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-gray-200 text-gray-600 hover:bg-gray-50 px-8 h-12 w-full sm:w-auto text-base font-medium"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>

          {/* Right Actions (Discard/Send) */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              className="rounded-full border-red-100 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 px-8 h-12 w-full sm:w-auto text-base font-medium"
            >
              <ThumbsDown className="mr-2 h-4 w-4" />
              Discard
            </Button>
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-10 h-12 w-full sm:w-auto shadow-md hover:shadow-lg transition-all text-base font-medium">
              <Send className="mr-2 h-4 w-4" />
              Send
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
