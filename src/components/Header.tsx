import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';

export const Header: React.FC = () => {
  const setSearchOpen = useMailStore(state => state.setSearchOpen);

  return (
    <header className="bg-[#1478C9] text-white px-4 pt-4 pb-3 flex items-center justify-between shadow-sm z-10 relative">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-sm border border-white/20">
          V
        </div>
        {/* App Title */}
        <h1 className="text-[28px] font-bold tracking-tight">Inbox</h1>
      </div>
      
      <div className="flex items-center gap-5">
        <button className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors relative">
          <Bell strokeWidth={2} size={24} />
          {/* Subtle notification dot placeholder if needed */}
        </button>
        <button 
          onClick={() => setSearchOpen(true)}
          className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
        >
          <Search strokeWidth={2} size={24} />
        </button>
      </div>
    </header>
  );
};
