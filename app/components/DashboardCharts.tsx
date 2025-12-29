"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Data remains the same
const lineData = [
  { name: "Mon", sent: 420, replies: 40, meetings: 20 },
  { name: "Tue", sent: 380, replies: 35, meetings: 15 },
  { name: "Wed", sent: 450, replies: 50, meetings: 25 },
  { name: "Thu", sent: 490, replies: 45, meetings: 20 },
  { name: "Fri", sent: 520, replies: 60, meetings: 30 },
  { name: "Sat", sent: 280, replies: 25, meetings: 10 },
  { name: "Sun", sent: 150, replies: 15, meetings: 5 },
];

const barData = [
  { name: "SaaS Demo v2", value: 12 },
  { name: "Outreach Cold", value: 8 },
  { name: "Healthcare Connect", value: 15 },
  { name: "Follow-up", value: 9 },
];

export function EngagementChart() {
  return (
    // UPDATED: Increased height to h-[500px] on desktop (md)
    <div className="bg-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 h-96 md:h-[500px] min-w-0 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 pl-4">
        Engagement Over Time
      </h3>

      {/* Chart Area */}
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={lineData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#C7C7C7"
            />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#1C1C1C", fontSize: 12 }}
              dy={10}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#1C1C1C", fontSize: 12 }}
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                padding: "12px",
              }}
              cursor={{ stroke: "#E5E7EB", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="sent"
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#2563EB" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#2563EB" }}
            />
            <Line
              type="monotone"
              dataKey="meetings"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#10B981" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#10B981" }}
            />
            <Line
              type="monotone"
              dataKey="replies"
              stroke="#06B6D4"
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: "#fff", stroke: "#06B6D4" }}
              activeDot={{ r: 6, strokeWidth: 0, fill: "#06B6D4" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
          <span className="text-sm text-blue-600 font-medium">Emails Sent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
          <span className="text-sm text-emerald-500 font-medium">Meetings</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
          <span className="text-sm text-cyan-500 font-medium">Replies</span>
        </div>
      </div>
    </div>
  );
}

export function PlaybookChart() {
  return (
    <div className="bg-slate-50 p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 h-96 md:h-[500px] min-w-0 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 pl-4">
        Top Performing Playbooks
      </h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barData}
            barSize={60}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            {/* 1. Define the vertical gradient */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                {/* Left color: Tailwind blue-500 */}
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                {/* Right color: Darker Blue */}
                <stop offset="100%" stopColor="#234C90" stopOpacity={1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#C7C7C7" />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#1C1C1C", fontSize: 11 }}
              dy={10}
              interval={0}
            />
            <YAxis
              axisLine={true}
              tickLine={true}
              tick={{ fill: "#1C1C1C", fontSize: 12 }}
              domain={[0, 16]}
              ticks={[0, 4, 8, 12, 16]}
            />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
            />
            {/* 2. Reference the gradient ID in the fill property */}
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[12, 12, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
