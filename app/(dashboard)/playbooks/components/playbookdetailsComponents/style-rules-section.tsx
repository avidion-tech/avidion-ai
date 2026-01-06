import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function StyleRulesSection() {
  const items = [
    { id: "emojis", label: "No Emojis" },
    { id: "exclamation", label: "No Exclamation Marks" },
    { id: "spelling", label: "US English Spelling" },
  ];

  return (
    <Card className="w-full rounded-[30px] bg-slate-50 p-3 border-none shadow-sm">
      <CardHeader className="px-8 pt-8 pb-4">
        <CardTitle className="text-xl text-slate-700">Style Rules</CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8 flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-3xl bg-gray-200/50 px-6 py-4 hover:bg-gray-200 transition-colors"
          >
            <Label
              htmlFor={item.id}
              className="text-base font-medium text-slate-700 cursor-pointer"
            >
              {item.label}
            </Label>
            <Checkbox
              id={item.id}
              className="h-6 w-6 rounded-lg border-slate-300 bg-white data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
