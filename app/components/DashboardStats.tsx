"use client";
import Image from "next/image";

const stats = [
  {
    label: "Emails Sent",
    value: "12,340",
    change: "+8%",
    icon: "/icons/Group1.png",
  },
  {
    label: "Replies",
    value: "1,240",
    change: "+12%",
    icon: "/icons/Group2.png",
  },
  {
    label: "Meetings Booked",
    value: "123",
    change: "+15%",
    icon: "/icons/Group3.png",
  },
  {
    label: "Reply Rate",
    value: "10.1%",
    change: "+2.3%",
    icon: "/icons/Group4.png",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-50 p-5 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex justify-between items-center mb-4">
            {/* Increased padding to p-4 and image size to w-10 h-10 (40px) */}
            <Image
              src={stat.icon}
              alt={stat.label}
              width={40}
              height={40}
              className="w-14 h-14 object-contain"
              unoptimized
            />

            {/* Percentage Badge */}
            <div className="text-green-500 text-xl font-medium">
              <span>{stat.change}</span>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-500 font-medium mb-1">
              {stat.label}
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">
              {stat.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
