import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";

export default function AllTemplatesSection({
  setIsOpenNewTemplateModal,
}: {
  setIsOpenNewTemplateModal: (isOpen: boolean) => void;
}) {
  const templates = [
    {
      id: 1,
      name: "Intro Template A",
      type: "Intro",
      isDefault: false,
      stats: { sent: "1240", opens: "758", replies: "102", rate: "8.2%" },
      insight: null,
    },
    {
      id: 2,
      name: "Intro Template B",
      type: "Intro",
      isDefault: true,
      stats: { sent: "1180", opens: "801", replies: "170", rate: "14.4%" },
      insight:
        "This template outperforms Intro Template A by +75% in reply rate",
    },
    {
      id: 3,
      name: "Follow-up 1",
      type: "Followup",
      isDefault: true,
      stats: { sent: "890", opens: "445", replies: "62", rate: "7%" },
      insight: null,
    },
    {
      id: 4,
      name: "Follow-up 2",
      type: "Followup",
      isDefault: true,
      stats: { sent: "654", opens: "228", replies: "19", rate: "7.7%" },
      insight: null,
    },
    {
      id: 5,
      name: "Back-up Email",
      type: "Backup",
      isDefault: true,
      stats: { sent: "321", opens: "172", replies: "70", rate: "3.4%" },
      insight: null,
    },
  ];

  return (
    <div className="w-full mx-auto space-y-6 pt-3">
      {/* Section Header */}
      <div className="flex items-center justify-between py-1">
        <h2 className="text-xl font-semibold text-slate-800">All Templates</h2>
        <button
          onClick={() => setIsOpenNewTemplateModal(true)}
          className="flex-1 md:flex-none px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <Plus className="w-5 h-5" />
          Create Template
        </button>
      </div>

      {/* Templates List */}
      <div className="space-y-6">
        {templates.map((template) => (
          <Card
            key={template.id}
            className="rounded-3xl border-none shadow-sm bg-slate-50"
          >
            <CardContent className="p-8">
              {/* Card Header: Title & Badges */}
              <div className="flex items-start justify-between pb-4">
                <div className="flex items-center gap-6">
                  <h3 className="text-lg font-medium text-slate-600">
                    {template.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-slate-50 text-sm text-slate-600 border border-slate-300 hover:bg-slate-200 font-medium rounded-full px-2 py-0"
                    >
                      {template.type}
                    </Badge>
                    {template.isDefault && (
                      <Badge className="bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm font-medium rounded-full gap-1 shadow-none border border-blue-200 px-2 py-0">
                        <Star className="w-3 h-3 fill-current" />
                        Default
                      </Badge>
                    )}
                  </div>
                </div>
                <button className="h-8 w-8 text-slate-800">
                  <BsThreeDotsVertical size={25} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  { label: "Sent", value: template.stats.sent },
                  { label: "Opens", value: template.stats.opens },
                  { label: "Replies", value: template.stats.replies },
                  { label: "Reply Rate", value: template.stats.rate },
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-400/10 rounded-3xl p-4">
                    <p className="text-lg text-slate-700 mb-1">{stat.label}</p>
                    <p className="text-2xl text-slate-700">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Success Insight (Conditional) */}
              {template.insight && (
                <div className="flex items-center gap-4 border border-green-200 bg-green-100 text-green-500 px-5 py-4 rounded-xl mt-8">
                  <MdCheckCircle className="w-5 h-5 fill-green-500 text-white" />
                  <span className="text-[16px]">{template.insight}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
