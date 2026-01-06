"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// I recommend using the shadcn/ui Select component for the best result
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CompanyProfileSection() {
  const [selectedCompanySize, setSelectedCompanySize] = useState("");
  const [selectedGeography, setSelectedGeography] = useState("");

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ];

  const geographies = ["India", "US/Canada", "Europe/UK", "SE Asia"];

  return (
    <Card className="w-full rounded-[32px] bg-slate-50 border-none shadow-sm">
      <CardHeader className="px-8 pt-8 pb-4">
        <CardTitle className="text-xl font-semibold text-slate-600">
          Company Profile
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input 1: Company Size */}
          <div className="space-y-2">
            <label className="text-slate-600 text-lg ml-1">
              Target Company Size
            </label>

            <Select
              value={selectedCompanySize}
              onValueChange={setSelectedCompanySize}
            >
              <SelectTrigger className="w-full h-[52px] rounded-full bg-white border-slate-200 px-6 text-[16px] text-slate-800 focus:ring-2 focus:ring-blue-500/20 shadow-sm">
                <SelectValue placeholder="11-50 employees" />
              </SelectTrigger>

              <SelectContent className="bg-white rounded-xl border border-slate-100 shadow-lg p-1">
                {companySizes.map((size) => (
                  <SelectItem
                    key={size}
                    value={size}
                    className="rounded-lg px-4 py-2.5 text-slate-600 focus:bg-slate-50 focus:text-slate-900 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white cursor-pointer"
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Input 2: Geography */}
          <div className="space-y-2">
            <label className="text-slate-600 text-lg ml-1">
              Primary Geography
            </label>

            <Select
              value={selectedGeography}
              onValueChange={setSelectedGeography}
            >
              <SelectTrigger className="w-full h-[52px] rounded-full bg-white border-slate-200 px-6 text-[16px] text-slate-800 focus:ring-2 focus:ring-blue-500/20 shadow-sm">
                <SelectValue placeholder="India" />
              </SelectTrigger>

              <SelectContent className="bg-white rounded-xl border border-slate-100 shadow-lg p-1">
                {geographies.map((geo) => (
                  <SelectItem
                    key={geo}
                    value={geo}
                    className="rounded-lg px-4 py-2.5 text-slate-600 focus:bg-slate-50 focus:text-slate-900 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white cursor-pointer"
                  >
                    {geo}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
