import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import React from "react";

interface NewPlaybookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewPlaybookModal = ({ open, onOpenChange }: NewPlaybookModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Overlay */}
        <DialogOverlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="max-h-[90vh] fixed left-[50%] top-[50%] z-50 flex flex-col w-[95%] max-w-[550px] translate-x-[-50%] translate-y-[-50%] bg-white p-8 shadow-xl duration-200 
          data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
          rounded-[28px] outline-none font-sans"
        >
          {/* Accessibility Hidden Title/Desc (Radix Requirement) */}
          <VisuallyHidden>
            <DialogTitle>New Playbook</DialogTitle>
            <DialogDescription>
              Create a new playbook to define your voice, templates, and
              strategy.
            </DialogDescription>
          </VisuallyHidden>

          {/* Header Section */}
          <div className="flex items-start justify-between mb-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              New Playbook
            </h2>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-2 -mt-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="text-gray-500 text-[15px] mb-8 font-normal">
            Create a new playbook to define your voice, templates, and strategy.
          </p>

          {/* Form Section */}
          <div className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-base font-medium text-gray-700 block">
                Name
              </label>
              <input
                type="text"
                placeholder="SaaS Demo Outreach"
                className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500 rounded-full px-5 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border-none"
              />
            </div>

            {/* Industry Input */}
            <div className="space-y-2">
              <label className="text-base font-medium text-gray-700 block">
                Industry
              </label>
              <input
                type="text"
                placeholder="SaaS"
                className="w-full bg-gray-100 text-gray-900 placeholder:text-gray-500 rounded-full px-5 py-2 outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border-none"
              />
            </div>
          </div>

          {/* Footer / Actions */}
          <div className="flex justify-end items-center gap-3 mt-10">
            <button
              onClick={() => onOpenChange(false)}
              className="px-6 py-2 rounded-full text-gray-600 font-medium hover:bg-gray-50 border border-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium hover:from-blue-600 hover:to-blue-600 transition-colors shadow-sm">
              Create
            </button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default NewPlaybookModal;
