import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react"; // Make sure you have lucide-react installed

export default function TestExampleSection() {
  return (
    <Card className="w-full rounded-3xl bg-slate-50 p-3 border-none shadow-sm">
      <CardHeader className="px-8 pt-8 pb-4">
        <CardTitle className="text-xl font-medium text-slate-700">
          Test Example
        </CardTitle>
      </CardHeader>

      <CardContent className="px-8 pb-8 space-y-6">
        {/* Email Preview Container */}
        <div className="bg-[#eff4ff] rounded-3xl p-6 md:p-8 text-slate-800 space-y-6">
          {/* Subject Line */}
          <div className="space-y-1">
            <span className="text-slate-400 text-lg block">Subject:</span>
            <p className="text-lg">Quick idea for Acme Corp</p>
          </div>

          {/* Body Content */}
          <div className="space-y-1">
            <span className="text-slate-400 text-lg block">Body:</span>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>Hi John,</p>
              <p>
                I noticed Acme Corp recently expanded to Mumbai. We help SaaS
                companies automate their outreach - teams see 2x reply rates.
              </p>
              <p>Would you be open to a quick 15-min call this week?</p>
              <p>
                Best,
                <br />
                Admin User
              </p>
            </div>
          </div>
        </div>

        <button className="w-full flex-1 md:flex-none px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
          <Play className="w-4 h-4 mr-2 fill-current" />
          Generate Another Example
        </button>
      </CardContent>
    </Card>
  );
}
