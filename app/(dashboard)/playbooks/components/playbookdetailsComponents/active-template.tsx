import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ActiveTemplateSection() {
  return (
    <Card className="w-full rounded-3xl bg-slate-50 border-none shadow-sm">
      <CardContent className="flex items-start justify-between px-10 py-8">
        {/* Left Side: Text Content */}
        <div className="">
          <h3 className="text-xl font-medium text-slate-700">
            Active Intro Template
          </h3>
          <p className="text-slate-500">Intro Template B (Best Performing)</p>
        </div>

        {/* Right Side: Status Badge */}
        <div className="flex items-center gap-2 bg-blue-500 text-white px-4 py-1.5 rounded-full shadow-sm shadow-blue-200">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">Default</span>
        </div>
      </CardContent>
    </Card>
  );
}
