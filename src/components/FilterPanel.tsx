import React from 'react';
import { X, Check } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import clsx from 'clsx';

export const FilterPanel: React.FC = () => {
  const { isFilterOpen, setFilterOpen } = useMailStore();
  const [activeFilter, setActiveFilter] = React.useState('All');

  if (!isFilterOpen) return null;

  const filters = ['All', 'Unread', 'To me', 'Flagged', 'Mentions', 'Has attachments'];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 animate-in fade-in duration-200" onClick={() => setFilterOpen(false)}>
      <div 
        className="bg-white w-full sm:max-w-[430px] rounded-t-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-full duration-300 pb-[env(safe-area-inset-bottom)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E8E8]">
          <span className="font-bold text-[18px]">Filter</span>
          <button onClick={() => setFilterOpen(false)} className="text-[#6B6B6B] p-1 bg-gray-100 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="py-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setTimeout(() => setFilterOpen(false), 200);
              }}
              className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors"
            >
              <span className={clsx("text-[16px]", activeFilter === filter ? "font-semibold text-[#1478C9]" : "text-[#202124]")}>
                {filter}
              </span>
              {activeFilter === filter && <Check size={20} className="text-[#1478C9]" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
