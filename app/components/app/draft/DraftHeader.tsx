import React from "react";
import { Filter, Menu } from "lucide-react";
import { GoBellFill } from "react-icons/go";
// import { AdvancedFiltersModal } from "./AdvancedFiltersModal";
import { IoMdRefresh } from "react-icons/io";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function DraftHeader({ onMenuClick }: HeaderProps) {
  //   const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        {/* Top Section: Menu + Text + Mobile Notification */}
        <div className="flex items-start justify-between w-full md:w-auto">
          <div className="flex items-start gap-4">
            {" "}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-md transition"
            >
              <Menu size={24} />
            </button>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                Drafts
              </h1>
              <p className="text-xs md:text-lg text-gray-500 mt-1">
                Review and Approve AI-generated email drafts.
              </p>
            </div>
          </div>

          <button className="md:hidden relative p-2 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 shadow-sm transition">
            <GoBellFill size={20} />
            <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <button className="hidden md:block relative p-3 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-slate-100 hover:border-blue-300  shadow-sm transition group">
            <GoBellFill size={24} className="text-gray-600" />
            <span className="absolute top-4 right-4 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white transform translate-x-1 -translate-y-1"></span>
          </button>
          <button className="flex-1 md:flex-none px-4 py-2.5 md:px-4 md:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm md:text-base font-medium hover:bg-slate-100 hover:border-blue-300 shadow-sm transition whitespace-nowrap">
            <IoMdRefresh size={18} className="inline-block mr-2 -mt-1" />
            Refresh
          </button>
          <button
            // onClick={() => setIsFilterModalOpen(true)}
            className="flex-1 md:flex-none px-6 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm md:text-base font-medium hover:from-blue-600 hover:to-blue-600 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Filter size={18} className="text-white/90" />
            Generate more
          </button>
        </div>
      </div>
      {/* <AdvancedFiltersModal
        open={isFilterModalOpen}
        onOpenChange={setIsFilterModalOpen}
      /> */}
    </>
  );
}
