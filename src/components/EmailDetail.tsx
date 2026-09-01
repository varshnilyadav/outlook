import React from 'react';
import { ArrowLeft, MoreVertical, Reply, ReplyAll, Forward } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import { Avatar } from './Avatar';

export const EmailDetail: React.FC = () => {
  const { selectedEmailId, emails, selectEmail } = useMailStore();
  
  const email = emails.find(e => e.id === selectedEmailId);

  if (!email) return null;

  return (
    <div className="absolute inset-0 bg-white z-20 flex flex-col animate-in slide-in-from-right duration-200 h-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8E8E8] bg-white pt-[max(env(safe-area-inset-top),16px)]">
        <button 
          onClick={() => selectEmail(null)}
          className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors text-[#202124]"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors text-[#202124]">
            <MoreVertical size={24} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-5 no-scrollbar pb-24">
        <h1 className="text-[24px] font-bold text-[#202124] leading-tight mb-6">
          {email.subject}
        </h1>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar colorClass={email.avatarColor} initials={email.avatarInitials} size="lg" />
            <div>
              <div className="text-[17px] font-bold text-[#202124]">{email.senderName}</div>
              <div className="text-[14px] text-[#6B6B6B]">{email.senderEmail}</div>
            </div>
          </div>
          <div className="text-[14px] text-[#6B6B6B]">
            {email.time}
          </div>
        </div>

        <div className="text-[16px] text-[#202124] leading-relaxed whitespace-pre-wrap">
          {email.body}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-10">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#202124] py-2.5 rounded-lg font-medium transition-colors">
            <Reply size={18} />
            Reply
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#202124] py-2.5 rounded-lg font-medium transition-colors">
            <ReplyAll size={18} />
            Reply All
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#202124] py-2.5 rounded-lg font-medium transition-colors">
            <Forward size={18} />
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};
