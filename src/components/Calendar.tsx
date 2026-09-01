import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

export const Calendar: React.FC = () => {
  return (
    <div className="flex-1 bg-white flex flex-col pt-[max(env(safe-area-inset-top),16px)] pb-24">
      <div className="px-5 py-4 border-b border-[#E8E8E8] flex justify-between items-center">
        <h1 className="text-[28px] font-bold text-[#202124]">Calendar</h1>
        <button className="p-2 text-[#1478C9] hover:bg-gray-100 rounded-full">
          <Plus size={24} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center text-[#6B6B6B] p-8">
        <div className="w-16 h-16 mb-4 rounded-full bg-blue-50 flex items-center justify-center text-[#1478C9]">
          <CalendarIcon size={32} />
        </div>
        <p className="text-lg font-medium text-[#202124]">No upcoming events</p>
        <p className="text-sm mt-1 text-center">Your schedule is clear for the next few days.</p>
      </div>
    </div>
  );
};
