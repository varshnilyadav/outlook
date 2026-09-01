import React from 'react';
import { 
  Inbox, Send, FileEdit, Archive, Trash2, Clock, Ban, Users,
  Grid, HelpCircle, Settings, Pencil, Bell
} from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import clsx from 'clsx';

export const Sidebar: React.FC = () => {
  const { isSidebarOpen, setSidebarOpen } = useMailStore();

  if (!isSidebarOpen) return null;

  const folders = [
    { name: 'Inbox', icon: Inbox, count: 220, isActive: true },
    { name: 'Sent', icon: Send },
    { name: 'Drafts', icon: FileEdit, count: 1 },
    { name: 'Archive', icon: Archive },
    { name: 'Deleted', icon: Trash2 },
    { name: 'Conversation History', icon: Clock },
    { name: 'Junk', icon: Ban },
    { name: 'Groups', icon: Users, count: '999+' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 animate-in fade-in duration-300"
        onClick={() => setSidebarOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-[320px] max-w-[85vw] bg-white h-full flex flex-row shadow-2xl animate-in slide-in-from-left duration-300">
        
        {/* Left Strip (Accounts) */}
        <div className="w-[68px] bg-[#f0f2f5] flex flex-col items-center py-6 border-r border-[#E8E8E8] shrink-0 h-full overflow-y-auto no-scrollbar pb-[env(safe-area-inset-bottom)]">
          <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-[#6B6B6B] mb-6 shadow-sm border border-gray-200">
            <Grid size={22} />
          </button>
          
          <div className="flex flex-col gap-4 flex-1 w-full items-center">
            {/* Active Account */}
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                V
              </div>
              <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-gray-400 border-2 border-[#f0f2f5] rounded-full" />
            </div>

            {/* Other Account */}
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg shadow-sm opacity-80 cursor-pointer">
                T
              </div>
              <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-gray-400 border-2 border-[#f0f2f5] rounded-full" />
            </div>

            {/* Add Account */}
            <button className="relative w-11 h-11 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shadow-sm cursor-pointer mt-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm8 3v4H8v2h4v4h2v-4h4v-2h-4V5h-2z" />
              </svg>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#1478C9] border-2 border-[#f0f2f5] rounded-full flex items-center justify-center text-white">
                <span className="text-sm font-bold leading-none -mt-0.5">+</span>
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-6 w-full items-center mb-[env(safe-area-inset-bottom)]">
            <button className="text-[#6B6B6B]">
              <HelpCircle size={24} />
            </button>
            <button className="text-[#6B6B6B]">
              <Settings size={24} />
            </button>
          </div>
        </div>

        {/* Right Panel (Folders) */}
        <div className="flex-1 flex flex-col h-full bg-white pt-[max(env(safe-area-inset-top),16px)] pb-[env(safe-area-inset-bottom)] overflow-y-auto">
          {/* Header */}
          <div className="px-5 py-4 pb-2">
            <div className="flex justify-between items-start mb-1">
              <h2 className="text-[20px] font-bold text-[#202124] leading-tight">Microsoft 365</h2>
              <button className="text-[#6B6B6B]">
                <Bell size={22} className="opacity-80" />
              </button>
            </div>
            <p className="text-[13px] text-[#6B6B6B] truncate">
              varshnil.pabbath_2028@wox...
            </p>
          </div>

          {/* Favourites Section */}
          <div className="mt-4 px-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[15px] font-bold text-[#6B6B6B]">Favourites</h3>
              <button className="text-[#6B6B6B] opacity-70 hover:opacity-100">
                <Pencil size={16} />
              </button>
            </div>
            
            <div className="flex flex-col gap-1">
              {folders.slice(0, 3).map((folder, i) => (
                <button 
                  key={`fav-${i}`}
                  className="w-full flex items-center gap-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <folder.icon size={22} className={folder.isActive ? 'text-[#1478C9] fill-[#1478C9]' : 'text-[#6B6B6B]'} strokeWidth={folder.isActive ? 2 : 1.5} />
                  <span className={clsx(
                    "flex-1 text-left text-[16px]", 
                    folder.isActive ? "font-bold text-[#1478C9]" : "font-medium text-[#202124]"
                  )}>
                    {folder.name}
                  </span>
                  {folder.count && (
                    <span className={clsx(
                      "text-[13px] px-1.5 rounded",
                      folder.isActive ? "bg-[#DCEEFF] text-[#0f62a6] font-bold" : "text-[#6B6B6B] font-medium"
                    )}>
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gray-100 w-full my-2" />

          {/* All Folders Section */}
          <div className="px-5 pb-8">
            <div className="flex flex-col gap-1">
              {folders.map((folder, i) => (
                <button 
                  key={`folder-${i}`}
                  className="w-full flex items-center gap-4 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  <folder.icon size={22} className={folder.isActive ? 'text-[#1478C9] fill-[#1478C9]' : 'text-[#6B6B6B]'} strokeWidth={folder.isActive ? 2 : 1.5} />
                  <span className={clsx(
                    "flex-1 text-left text-[16px]", 
                    folder.isActive ? "font-bold text-[#1478C9]" : "font-medium text-[#202124]"
                  )}>
                    {folder.name}
                  </span>
                  {folder.count && (
                    <span className={clsx(
                      "text-[13px] px-1.5 rounded",
                      folder.isActive ? "bg-[#DCEEFF] text-[#0f62a6] font-bold" : "text-[#6B6B6B] font-medium bg-gray-100"
                    )}>
                      {folder.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
