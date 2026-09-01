import React from 'react';
import { SquarePen } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';

export const FloatingComposeButton: React.FC = () => {
  const setComposeOpen = useMailStore(state => state.setComposeOpen);

  return (
    <button
      onClick={() => setComposeOpen(true)}
      className="fixed bottom-24 right-5 w-14 h-14 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#1478C9] hover:bg-gray-50 active:scale-95 transition-all z-20 border border-gray-100"
    >
      <SquarePen size={26} strokeWidth={2} />
    </button>
  );
};
