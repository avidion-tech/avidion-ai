import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, BarChart3 } from "lucide-react";
// 1. Import DialogPortal and DialogOverlay
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

interface NewCampaignModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewCampaignModal({
  open,
  onOpenChange,
}: NewCampaignModalProps) {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [campaignName, setCampaignName] = useState("");
  const [selectedPlaybook, setSelectedPlaybook] = useState("");
  const [selectedLeadList, setSelectedLeadList] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("09:30");
  const [endTime, setEndTime] = useState("18:30");
  const [weekdaysOnly, setWeekdaysOnly] = useState(true);
  const [maxNewEmails, setMaxNewEmails] = useState(80);
  const [maxFollowupsPerDay, setMaxFollowupsPerDay] = useState(200);
  const [randomJitter, setRandomJitter] = useState(true);
  const [daysBetweenFollowups, setDaysBetweenFollowups] = useState(2);
  const [maxFollowupsPerLead, setMaxFollowupsPerLead] = useState(200);

  const getLeadCount = () => {
    const match = selectedLeadList.match(/\(([^)]+)\s+leads\)/);
    return match ? match[1] : "0";
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onOpenChange(false);
      setShowSuccess(true);
      //   resetForm();

      // Console log data for debugging
      console.log("🚀 Launching Campaign:", {
        campaignName,
        selectedPlaybook,
        selectedLeadList,
        startDate,
        startTime,
      });
    }
  };

  //   const resetForm = () => {
  //     setStep(1);
  //     setCampaignName("");
  //     setSelectedPlaybook("");
  //     setSelectedLeadList("");
  //     setSelectedEmail("");
  //     setSelectedGoal("");
  //     setStartDate("");
  //     setEndDate("");
  //     setStartTime("09:30");
  //     setEndTime("18:30");
  //     setWeekdaysOnly(true);
  //     setMaxNewEmails(80);
  //     setMaxFollowupsPerDay(200);
  //     setRandomJitter(true);
  //     setDaysBetweenFollowups(2);
  //     setMaxFollowupsPerLead(200);
  //   };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onOpenChange(false);
    }
  };

  const handleCloseAll = () => {
    setShowSuccess(false);
    onOpenChange(false);
    // Reset form after closing
    setTimeout(() => {
      setStep(1);
      setCampaignName("");
      setSelectedPlaybook("");
      setSelectedLeadList("");
      setSelectedEmail("");
      setSelectedGoal("");
      setStartDate("");
      setEndDate("");
      setStartTime("09:30");
      setEndTime("18:30");
      setWeekdaysOnly(true);
      setMaxNewEmails(80);
      setMaxFollowupsPerDay(200);
      setRandomJitter(true);
      setDaysBetweenFollowups(2);
      setMaxFollowupsPerLead(200);
    }, 300);
  };

  const playbooks = [
    "SaaS Demo Outreach",
    "Logistic Partnership",
    "Healthcare Connect",
    "Enterprise Cold Outreach",
  ];

  const leadLists = [
    "SaaS CEOs (1,200 leads)",
    "Logistic Directors (800 leads)",
    "Healthcare Managers (450 leads)",
    "Enterprise CTOs (320 leads)",
  ];

  const emailAccounts = ["admin@acme.com (Gmail)", "sales@acme.com (Outlook)"];

  const campaignGoals = [
    "Book more meetings",
    "Increase brand awareness",
    "Drive website traffic",
    "Promote new feature launch",
    "Re-engage cold leads",
  ];

  // --- 4. Render Success Modal (Using your HTML structure) ---
  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/50 backdrop-blur-sm overflow-y-auto overflow-x-hidden">
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* Main Modal Box */}
          <div className="relative bg-white border border-gray-200 rounded-2xl shadow-xl p-4 md:p-8 text-center">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseAll}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            {/* Success Icon (Solid Blue Circle with White Check) */}
            <div className="flex justify-center mb-5">
              <div className="h-20 w-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-200">
                <Check className="h-10 w-10 text-white stroke-[3]" />
              </div>
            </div>

            {/* Content */}
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Campaign Launched
            </h3>
            <p className="mb-8 text-gray-500 font-normal">
              Your campaign is live and ready to reach your audience.
            </p>

            {/* Action Button */}
            {/* <button
              onClick={handleCloseAll}
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm inline-flex items-center px-8 py-3 text-center transition-colors"
            >
              Great!
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        <DialogContent
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="max-h-[90vh] fixed left-[50%] top-[50%] z-50 flex flex-col w-[95%] max-w-[95vw] sm:max-w-[600px] translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl sm:rounded-[24px] overflow-hidden outline-none"
        >
          <VisuallyHidden>
            <DialogTitle>Create Campaign</DialogTitle>
            <DialogDescription>
              Form to create a new campaign, including naming, selecting
              playbooks, and lead lists.
            </DialogDescription>
          </VisuallyHidden>

          <div className="flex-shrink-0 px-8 pt-8 sm:px-10 sm:pt-8 pb-2 bg-white z-10">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-gray-700 text-xl">
                    Create Campaign
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenChange(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Stepper */}
            <div className="mt-6 flex items-center justify-center">
              <div className="relative flex w-full max-w-[550px] items-center justify-between">
                {/* Background Line */}
                <div className="absolute left-0 top-1/2 h-[5px] w-full -translate-y-1/2 bg-gray-200 rounded-full">
                  {/* Active Progress Line */}
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{
                      width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
                    }}
                  />
                </div>

                {/* Step 1 Circle */}
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-md font-semibold ring-4 ring-white transition-colors duration-300 ${
                    step > 1
                      ? "bg-blue-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {step > 1 ? <Check className="h-5 w-5" /> : "1"}
                </div>

                {/* Step 2 Circle */}
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-md font-semibold ring-4 ring-white transition-colors duration-300 ${
                    step === 2
                      ? "bg-blue-500 text-white"
                      : step > 2
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > 2 ? <Check className="h-5 w-5" /> : "2"}
                </div>

                {/* Step 3 Circle */}
                <div
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-md font-semibold ring-4 ring-white transition-colors duration-300 ${
                    step === 3
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  3
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-8 sm:px-10 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    Campaign Details
                  </h3>
                  <p className="text-gray-500">
                    Set up the basic information for your campaign
                  </p>
                </div>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="campaignName"
                      className="block text-md font-medium text-gray-700 mb-1"
                    >
                      Campaign Name *
                    </label>
                    <input
                      type="text"
                      id="campaignName"
                      value={campaignName}
                      onChange={(e) => setCampaignName(e.target.value)}
                      className="w-full rounded-full bg-gray-100 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., November SaaS Outreach"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Select Playbook *
                    </label>

                    <Select
                      value={selectedPlaybook}
                      onValueChange={setSelectedPlaybook}
                    >
                      {/* Custom Trigger matching your previous button style */}
                      <SelectTrigger
                        className={`w-full rounded-full px-5 py-5 border-0 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-none [&>span]:line-clamp-1 ${
                          selectedPlaybook
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="Choose a playbook" />
                      </SelectTrigger>

                      {/* Dropdown Content matching your previous rounded-3xl style */}
                      <SelectContent className="bg-white rounded-[24px] border border-gray-100 shadow-xl max-h-60 p-2">
                        {playbooks.map((playbook) => (
                          <SelectItem
                            key={playbook}
                            value={playbook}
                            // Customizing the item to look like your previous list items
                            className="rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:text-blue-600 data-[state=checked]:bg-blue-50/50"
                          >
                            {playbook}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Select Lead List *
                    </label>

                    <Select
                      value={selectedLeadList}
                      onValueChange={setSelectedLeadList}
                    >
                      <SelectTrigger
                        className={`w-full rounded-full px-5 py-5 border-0 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-none [&>span]:line-clamp-1 ${
                          selectedLeadList
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="Choose a lead list" />
                      </SelectTrigger>

                      <SelectContent className="bg-white rounded-[24px] border border-gray-100 shadow-xl max-h-60 p-2">
                        {leadLists.map((list) => (
                          <SelectItem
                            key={list}
                            value={list}
                            className="rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:text-blue-600 data-[state=checked]:bg-blue-50/50"
                          >
                            {list}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Email Account *
                    </label>

                    <Select
                      value={selectedEmail}
                      onValueChange={setSelectedEmail}
                    >
                      <SelectTrigger
                        className={`w-full rounded-full px-5 py-5 border-0 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-none [&>span]:line-clamp-1 ${
                          selectedEmail
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="Select connected email" />
                      </SelectTrigger>

                      <SelectContent className="bg-white rounded-[24px] border border-gray-100 shadow-xl max-h-60 p-2">
                        {emailAccounts.map((email) => (
                          <SelectItem
                            key={email}
                            value={email}
                            className="rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:text-blue-600 data-[state=checked]:bg-blue-50/50"
                          >
                            {email}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Campaign Goal *
                    </label>

                    <Select
                      value={selectedGoal}
                      onValueChange={setSelectedGoal}
                    >
                      <SelectTrigger
                        className={`w-full rounded-full px-5 py-5 border-0 text-sm transition-all duration-200 focus:ring-2 focus:ring-blue-500 shadow-none [&>span]:line-clamp-1 ${
                          selectedGoal
                            ? "bg-gray-100 text-gray-900"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <SelectValue placeholder="What's your primary goal?" />
                      </SelectTrigger>

                      <SelectContent className="bg-white rounded-[24px] border border-gray-100 shadow-xl max-h-60 p-2">
                        {campaignGoals.map((goal) => (
                          <SelectItem
                            key={goal}
                            value={goal}
                            className="rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:text-blue-600 data-[state=checked]:bg-blue-50/50"
                          >
                            {goal}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    Sending Options
                  </h3>
                  <p className="text-gray-500">
                    Configure when and how emails should be sent
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        Start Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        End Date (Optional)
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time Window Row */}
                  <div>
                    <label className="block text-md font-medium text-gray-700 mb-1">
                      Sending Time Window
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 px-1">
                      <span className="text-xs text-gray-400">Start time</span>
                      <span className="text-xs text-gray-400">End time</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Emails will only be sent during this window (IST)
                    </p>
                  </div>

                  {/* Weekdays Toggle */}
                  <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4 border border-gray-100">
                    <div>
                      <h4 className="text-md font-medium text-gray-900">
                        Weekdays Only
                      </h4>
                      <p className="text-sm text-gray-500">
                        Skip weekends for sending
                      </p>
                    </div>
                    <button
                      onClick={() => setWeekdaysOnly(!weekdaysOnly)}
                      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                        weekdaysOnly ? "bg-gray-900" : "bg-gray-200"
                      }`}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                          weekdaysOnly ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="pt-6 border-t border-gray-100 space-y-6">
                    {/* Max New Emails */}
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        Max New Emails Per Day
                      </label>
                      <input
                        type="number"
                        value={maxNewEmails}
                        onChange={(e) =>
                          setMaxNewEmails(parseInt(e.target.value))
                        }
                        className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Recommended: 80 for new domains
                      </p>
                    </div>

                    {/* Max Follow-ups */}
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        Max Follow-ups Per Day
                      </label>
                      <input
                        type="number"
                        value={maxFollowupsPerDay}
                        onChange={(e) =>
                          setMaxFollowupsPerDay(parseInt(e.target.value))
                        }
                        className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Total follow-up emails allowed per day
                      </p>
                    </div>

                    {/* Random Jitter Toggle */}
                    <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4 border border-gray-100">
                      <div>
                        <h4 className="text-md font-medium text-gray-900">
                          Random Jitter
                        </h4>
                        <p className="text-sm text-gray-500">
                          Add ±15 min randomization to send times
                        </p>
                      </div>
                      <button
                        onClick={() => setRandomJitter(!randomJitter)}
                        className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                          randomJitter ? "bg-gray-900" : "bg-gray-200"
                        }`}
                      >
                        <span className="sr-only">Use setting</span>
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            randomJitter ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Days Between Follow-ups */}
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        Days Between Follow-ups
                      </label>
                      <input
                        type="number"
                        value={daysBetweenFollowups}
                        onChange={(e) =>
                          setDaysBetweenFollowups(parseInt(e.target.value))
                        }
                        className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-md font-medium text-gray-700 mb-1">
                        Max Follow-ups Per Lead
                      </label>
                      <input
                        type="number"
                        value={maxFollowupsPerLead}
                        onChange={(e) =>
                          setMaxFollowupsPerLead(parseInt(e.target.value))
                        }
                        className="w-full rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300 pb-4">
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    Review & Launch
                  </h3>
                  <p className="text-gray-500">
                    Review your campaign settings before launching
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Summary Card - Step 1 Data */}
                  <div className="rounded-3xl bg-gray-50 p-6 space-y-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Campaign Summary
                    </h4>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Campaign Name:</span>
                      <span className="font-medium text-gray-900">
                        {campaignName || "Not set"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Playbook:</span>
                      <span className="font-medium text-gray-900">
                        {selectedPlaybook || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Lead List:</span>
                      <span className="font-medium text-gray-900">
                        {selectedLeadList || "list1"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Email Account:</span>
                      <span className="font-medium text-gray-900">
                        {selectedEmail || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Goal:</span>
                      <span className="font-medium text-gray-900">
                        {selectedGoal || "Not set"}
                      </span>
                    </div>
                  </div>

                  {/* Schedule Card - Step 2 Data */}
                  <div className="rounded-3xl bg-gray-50 p-6 space-y-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">
                      Sending Schedule
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Start Date:</span>
                        <span className="font-medium text-gray-900">
                          {startDate || "Not set"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Time Window:</span>
                        <span className="font-medium text-gray-900">
                          {startTime} - {endTime} IST
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Max Emails/Day:</span>
                        <span className="font-medium text-gray-900">
                          {maxNewEmails}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Follow-ups:</span>
                        <span className="font-medium text-gray-900">
                          Up to 3 per lead
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Reach Card (New) */}
                  <div className="rounded-3xl bg-[#f0f9ff] p-6 flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <BarChart3 className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-1">
                        Estimated Reach
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Based on your settings, this campaign will reach
                        approximately{" "}
                        <span className="font-bold text-gray-900">
                          {getLeadCount()} leads
                        </span>{" "}
                        over the next{" "}
                        <span className="font-bold text-gray-900">15 days</span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex-shrink-0 px-8 pb-8 sm:px-8 sm:pb-4 pt-2 border-t-2 border-gray-200 bg-white">
            <div className="flex items-center justify-between">
              <button
                className="flex items-center rounded-full border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={handleBack}
              >
                <ChevronLeft className="mr-2 h-5 w-5 text-gray-400" />
                Back
              </button>
              <div className="text-sm font-medium text-gray-500">
                Step {step} of 3
              </div>
              <button
                className="flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-2.5 text-sm font-medium text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={handleNext}
              >
                {step === 3 ? "Launch Campaign" : "Next"}
                {step !== 3 && <ChevronRight className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
