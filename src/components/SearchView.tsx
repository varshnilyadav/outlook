import React, { useRef, useEffect } from 'react';
import { ArrowLeft, Search, X } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';

export const SearchView: React.FC = () => {
  const { isSearchOpen, setSearchOpen, searchQuery, setSearchQuery } = useMailStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div className="absolute inset-0 bg-white z-40 flex flex-col animate-in fade-in duration-200">
      <div className="flex items-center px-2 py-2 border-b border-[#E8E8E8] bg-white pt-[max(env(safe-area-inset-top),12px)]">
        <button 
          onClick={() => setSearchOpen(false)}
          className="p-2 text-[#202124] hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex-1 flex items-center bg-gray-100 rounded-lg px-3 py-2 ml-1 mr-2">
          <Search size={18} className="text-[#6B6B6B]" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search emails..."
            className="flex-1 bg-transparent border-none outline-none ml-2 text-[16px] text-[#202124]"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="p-1 text-[#6B6B6B]">
              <X size={16} />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 bg-[#f0f2f5] p-4 text-center text-[#6B6B6B] pt-10">
        {searchQuery ? 'Showing search results...' : 'Type to search across your emails'}
      </div>
    </div>
  );
};
