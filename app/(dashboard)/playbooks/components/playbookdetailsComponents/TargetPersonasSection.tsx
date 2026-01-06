import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TargetPersonasSection() {
  const personas = [
    "Founder/CEO",
    "Head of Sales",
    "CMO/Marketing Head",
    "RevOps",
  ];

  return (
    <Card className="w-full rounded-3xl bg-slate-50 border-none shadow-sm">
      <CardHeader className="px-8 pt-8 pb-4">
        <CardTitle className="text-2xl font-semibold text-slate-600">
          Target Personas
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-10">
        <p className="text-slate-600 text-lg mb-2">Primary Buyer Persona</p>

        {/* Personas Container - Flex wrap handles responsiveness automatically */}
        <div className="flex flex-wrap gap-4">
          {personas.map((persona) => (
            <button
              key={persona}
              className="px-6 py-4 rounded-full border-2 border-blue-400 text-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors text-md sm:text-base whitespace-nowrap"
            >
              {persona}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
