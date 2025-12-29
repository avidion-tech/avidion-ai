import React from "react";

// --- Types ---
type StatusType = "success" | "warning" | "error";

interface ActivityItemProps {
  status: StatusType;
  text: string;
  time: string;
}

// --- Internal Component: ActivityItem ---
const ActivityItem = ({ status, text, time }: ActivityItemProps) => {
  const statusColors: Record<StatusType, string> = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  const dotColor = statusColors[status] || "bg-gray-300";

  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-start gap-3.5 overflow-hidden">
        {/* Status Dot */}
        <span className={`flex-none w-3 h-3 mt-1.5 rounded-full ${dotColor}`} />
        {/* Activity Text */}
        <p className="text-gray-600 font-medium truncate pr-2">{text}</p>
      </div>
      {/* Timestamp */}
      <span className="flex-none text-gray-400 text-sm mt-0.5">{time}</span>
    </div>
  );
};

// --- Data (Typed correctly) ---
const activityData: {
  id: number;
  status: StatusType;
  text: string;
  time: string;
}[] = [
  {
    id: 1,
    status: "success",
    text: "Email sent to John @Acme",
    time: "2h ago",
  },
  {
    id: 2,
    status: "success",
    text: "Meeting booked with Alice @XYZ Corp",
    time: "3h ago",
  },
  {
    id: 3,
    status: "success",
    text: "Reply received from Sarah @TechCo",
    time: "4h ago",
  },
  {
    id: 4,
    status: "warning",
    text: 'Campaign "SaaS Outreach" paused',
    time: "5h ago",
  },
  {
    id: 5,
    status: "error",
    text: "Email bounced: invalid@example.com",
    time: "6h ago",
  },
];

// --- Main Component ---
const RecentActivityCard = () => {
  return (
    <div className="bg-slate-50 p-6 md:p-8 rounded-[2rem] shadow-sm">
      <h2 className="text-2xl font-medium text-gray-700 mb-6">
        Recent Activity
      </h2>
      <div className="space-y-5">
        {activityData.map((item) => (
          <ActivityItem
            key={item.id}
            status={item.status}
            text={item.text}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivityCard;
