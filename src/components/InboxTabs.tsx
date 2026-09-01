import React from 'react';
import { Filter } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';

export const InboxTabs: React.FC = () => {
  const { activeTab, setActiveTab, setFilterOpen } = useMailStore();

  return (
    <div className="bg-[#1478C9] text-white px-4 pb-3 flex items-center justify-between shadow-sm z-10 relative">
      <div className="flex bg-[#0f62a6] rounded-full p-0.5">
        <button
          onClick={() => setActiveTab('Focused')}
          className={`px-4 py-1.5 rounded-full text-[15px] font-semibold transition-colors ${
            activeTab === 'Focused'
              ? 'bg-white text-[#1478C9]'
              : 'text-white hover:bg-white/10'
          }`}
        >
          Focused
        </button>
        <button
          onClick={() => setActiveTab('Other')}
          className={`px-4 py-1.5 rounded-full text-[15px] font-semibold transition-colors ${
            activeTab === 'Other'
              ? 'bg-white text-[#1478C9]'
              : 'text-white hover:bg-white/10'
          }`}
        >
          Other
        </button>
      </div>

      <button
        onClick={() => setFilterOpen(true)}
        className="flex items-center gap-2 text-white hover:bg-white/10 px-2 py-1.5 rounded-md transition-colors"
      >
        <Filter size={18} strokeWidth={2} />
        <span className="font-medium text-[15px]">Filter</span>
      </button>
    </div>
  );
};
