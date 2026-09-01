import React from 'react';
import { FileText, Users, Settings, HelpCircle, Shield } from 'lucide-react';

export const Apps: React.FC = () => {
  const apps = [
    { name: 'Files', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'Contacts', icon: Users, color: 'text-green-500', bg: 'bg-green-50' },
    { name: 'Security', icon: Shield, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Settings', icon: Settings, color: 'text-gray-600', bg: 'bg-gray-100' },
    { name: 'Help', icon: HelpCircle, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <div className="flex-1 bg-white flex flex-col pt-[max(env(safe-area-inset-top),16px)] pb-24">
      <div className="px-5 py-4 border-b border-[#E8E8E8]">
        <h1 className="text-[28px] font-bold text-[#202124]">Apps</h1>
      </div>
      
      <div className="grid grid-cols-4 gap-y-8 gap-x-4 p-6">
        {apps.map((app) => (
          <button key={app.name} className="flex flex-col items-center gap-2 group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${app.bg} ${app.color} group-hover:scale-95 transition-transform`}>
              <app.icon size={28} strokeWidth={1.5} />
            </div>
            <span className="text-[12px] font-medium text-[#202124]">{app.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
