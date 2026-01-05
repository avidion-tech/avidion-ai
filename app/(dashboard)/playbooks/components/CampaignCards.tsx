import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const campaigns = [
  {
    id: 1,
    title: "SaaS Demo Outreach",
    category: "SaaS",
    version: "v1.3",
    lastUpdated: "Nov 5, 2025",
    createdBy: "Admin User",
    status: "Active",
  },
  {
    id: 2,
    title: "Logistics Partnership",
    category: "Logistics",
    version: "v2.1",
    lastUpdated: "Oct 28, 2025",
    createdBy: "Admin User",
    status: "Active",
  },
  {
    id: 3,
    title: "Healthcare Connect",
    category: "Healthcare",
    version: "v1.0",
    lastUpdated: "Oct 15, 2025",
    createdBy: "Sales Manager",
    status: "Active",
  },
];

export default function CampaignSection() {
  return (
    <>
      {/* <section className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-gray-100 my-8"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {campaigns.map((item) => (
          <Card
            key={item.id}
            className="bg-slate-50 rounded-3xl p-2 border-none shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold text-slate-700">
                    {item.title}
                  </CardTitle>
                  <p className="text-slate-500 mt-1">{item.category}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <MoreVertical width={24} height={24} className="h-6 w-6" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-2 py-6">
              <div className="flex justify-between text-md">
                <span className="text-slate-400">Version:</span>
                <span className="text-slate-600 font-medium">
                  {item.version}
                </span>
              </div>
              <div className="flex justify-between text-md">
                <span className="text-slate-400">Last Updated:</span>
                <span className="text-slate-600 font-medium">
                  {item.lastUpdated}
                </span>
              </div>
              <div className="flex justify-between text-md">
                <span className="text-slate-400">Created By:</span>
                <span className="text-slate-600 font-medium">
                  {item.createdBy}
                </span>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between items-center pt-2">
              <Badge
                variant="secondary"
                className="bg-green-50 text-green-600 hover:bg-green-100 px-4 py-1 text-sm font-normal rounded-full"
              >
                {item.status}
              </Badge>

              {/* UPDATED: Link to the dynamic page */}
              <Link href={`/playbooks/${item.id}`}>
                <Button
                  variant="outline"
                  className="rounded-full px-6 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                >
                  Open
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* </section> */}
    </>
  );
}
