import React, { useState } from 'react';
import { ArrowLeft, MoreVertical, Reply, ReplyAll, Forward, Paperclip, ChevronDown, Smile } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import { Avatar } from './Avatar';

export const EmailDetail: React.FC = () => {
  const { selectedEmailId, emails, selectEmail } = useMailStore();
  const [isHeaderExpanded, setIsHeaderExpanded] = useState(false);
  
  const email = emails.find(e => e.id === selectedEmailId);

  if (!email) return null;

  return (
    <div className="absolute inset-0 bg-white z-20 flex flex-col animate-in slide-in-from-right duration-200 h-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white pt-[max(env(safe-area-inset-top),16px)]">
        <button 
          onClick={() => selectEmail(null)}
          className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors text-[#6B6B6B]"
        >
          <ArrowLeft size={26} strokeWidth={1.5} />
        </button>
      </div>

      <div className="border-t border-[#E8E8E8]" />

      {/* Content */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Subject Area */}
        <div className="px-5 py-4 flex justify-between items-start gap-4 border-b border-[#E8E8E8]">
          <h1 className="text-[22px] font-bold text-[#202124] leading-tight flex-1">
            {email.subject}
          </h1>
          <div className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E8E8E8] rounded-md text-[#202124] shrink-0">
            <Paperclip size={16} strokeWidth={2} />
            <span className="text-[14px] font-semibold">1</span>
          </div>
        </div>

        {/* Sender Header (Expandable) */}
        <div className="px-5 py-4 border-b border-[#E8E8E8]">
          {!isHeaderExpanded ? (
            // Collapsed View
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsHeaderExpanded(true)}
            >
              <div className="flex items-center gap-3">
                <Avatar colorClass={email.avatarColor} initials={email.avatarInitials} size="md" />
                <div>
                  <div className="text-[16px] font-bold text-[#202124] flex items-center gap-1">
                    {email.senderName}
                  </div>
                  <div className="text-[14px] text-[#6B6B6B] flex items-center gap-1">
                    To: me <ChevronDown size={14} className="mt-0.5" />
                  </div>
                </div>
              </div>
              <div className="text-[14px] text-[#6B6B6B]">
                {email.time}
              </div>
            </div>
          ) : (
            // Expanded View (Screenshot Match)
            <div 
              className="flex gap-4 cursor-pointer relative"
              onClick={() => setIsHeaderExpanded(false)}
            >
              <div className="pt-1">
                <Avatar colorClass={email.avatarColor} initials={email.avatarInitials} size="lg" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="text-[18px] font-medium text-[#1478C9] mb-0.5">
                    {email.senderName}
                  </div>
                  <button className="text-[#a0a0a0] p-1 -mr-2">
                    <MoreVertical size={20} strokeWidth={2} />
                  </button>
                </div>
                <div className="text-[15px] text-[#6B6B6B] mb-3">
                  {email.senderEmail}
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 mb-3 text-[15px]">
                  <div className="font-medium text-[#202124]">Cc:</div>
                  <div>
                    <div className="font-medium text-[#1478C9]">Valluru Abbas Ameen</div>
                    <div className="text-[#6B6B6B]">abbas.valluru@woxsen.edu.in</div>
                  </div>
                </div>

                <div className="text-[15px] text-[#6B6B6B]">
                  Tuesday, 1 September, 10:14 AM
                </div>
                
                <div className="absolute -bottom-2 -right-2 p-1.5 border border-[#E8E8E8] rounded-full text-[#6B6B6B]">
                  <Smile size={18} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-5 pt-6 text-[16px] text-[#202124] leading-relaxed whitespace-pre-wrap">
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
