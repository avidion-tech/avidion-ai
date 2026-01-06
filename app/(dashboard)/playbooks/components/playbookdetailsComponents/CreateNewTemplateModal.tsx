import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
  DialogDescription,
} from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";

interface CreateNewTemplateModal {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateNewTemplateModal = ({
  open,
  onOpenChange,
}: CreateNewTemplateModal) => {
  const [templateName, setTemplateName] = useState("");
  const [selectedTemplateType, setSelectedTemplateType] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const templateType = [
    "Intro/first touch",
    "Follow-up",
    "Break-up",
    "Re-engagement",
    "Nurture",
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogPortal>
          {/* Overlay */}
          <DialogOverlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

          <DialogContent
            onCloseAutoFocus={(e) => e.preventDefault()}
            className="max-h-[90vh] fixed left-[50%] top-[50%] z-50 flex flex-col w-[95%] max-w-[600px] translate-x-[-50%] translate-y-[-50%] bg-white p-9 shadow-xl duration-200 
          data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] 
          rounded-[28px] outline-none font-sans"
          >
            {/* Accessibility Hidden Title/Desc (Radix Requirement) */}
            <VisuallyHidden>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Create a new email template for your outreach campaigns. Use
                variables like &#123;firstName&#125;, &#123;companyName&#125;
                and &#123;role&#125; for personalization.
              </DialogDescription>
            </VisuallyHidden>

            {/* Header Section */}
            <div className="flex-shrink-0 bg-white z-10">
              <div className="flex items-start justify-between mb-1">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Create New Template
                </h2>
                <button
                  onClick={() => onOpenChange(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-2 -mt-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-500 text-[15px] mb-8 font-normal">
                Create a new email template for your outreach campaigns. Use
                variables like &#123;firstName&#125;, &#123;companyName&#125;
                and &#123;role&#125; for personalization.
              </p>
            </div>
            <div className="flex-1 overflow-y-auto px-1 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="campaignName"
                      className="block text-md font-medium text-gray-700 mb-1"
                    >
                      Template Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="campaignName"
                      value={templateName}
                      onChange={(e) => setTemplateName(e.target.value)}
                      className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Into Template C"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Template Type <span className="text-red-500">*</span>
                    </label>

                    <Select
                      value={selectedTemplateType}
                      onValueChange={setSelectedTemplateType}
                    >
                      {/* Custom Trigger matching your previous button style */}
                      <SelectTrigger
                        className={`w-full rounded-full px-5 py-5 border-0 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-none [&>span]:line-clamp-1 ${
                          selectedTemplateType
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="Intro/first touch" />
                      </SelectTrigger>

                      {/* Dropdown Content matching your previous rounded-3xl style */}
                      <SelectContent className="bg-white rounded-[24px] border border-gray-100 shadow-xl max-h-60 p-2">
                        {templateType.map((templates) => (
                          <SelectItem
                            key={templates}
                            value={templates}
                            // Customizing the item to look like your previous list items
                            className="rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:text-blue-600 data-[state=checked]:bg-blue-50/50"
                          >
                            {templates}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="campaignName"
                      className="block text-md font-medium text-gray-700 mb-1"
                    >
                      Subject Line <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subjectLine"
                      value={subjectLine}
                      onChange={(e) => setSubjectLine(e.target.value)}
                      className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Quick idea for {compantName}"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="emailBody"
                      className="block text-md font-medium text-gray-700 mb-2"
                    >
                      Email Body <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="emailBody"
                        value={emailBody}
                        onChange={(e) => setEmailBody(e.target.value)}
                        className="w-full h-64 rounded-[24px] bg-gray-100 p-5 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none leading-relaxed"
                        placeholder={`Hi {firstname},

I noticed {companyname} recently [specific observation]. We help [industry] companies automate their outreach - teams typically see 2x reply rates.
                        
Would you be open to a quick 15-min call this week?
                        
Best,
[Your Name]`}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2 px-1">
                      <span className="text-xs text-gray-500">
                        Current length:{" "}
                        {emailBody.split(" ").filter(Boolean).length} words
                      </span>
                      <span className="text-xs text-gray-500">
                        Recommended: &lt;120 words
                      </span>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-full"></div>

                  <div className="flex justify-end items-center gap-3">
                    <button
                      onClick={() => onOpenChange(false)}
                      className="flex-1 md:flex-none px-3 py-1.5 md:px-3 md:py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap"
                    >
                      Cancel
                    </button>
                    <button className="flex-1 md:flex-none px-3 py-1.5 md:px-3 md:py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
                      <Plus className="h-5 w-5" />
                      Create Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
};

export default CreateNewTemplateModal;
