import React from 'react';
import { ArrowLeft, MoreVertical, Reply, Mail, Trash2, Archive, Smile, FolderOpen, ChevronDown } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import clsx from 'clsx';

// Helper to get initials
const getInitials = (name: string) => {
  const parts = name.replace(/[^a-zA-Z ]/g, '').split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  if (parts.length === 1 && parts[0].length > 0) return parts[0][0].toUpperCase();
  return 'U';
};

export const EmailDetail: React.FC = () => {
  const { selectedEmailId, emails, selectEmail } = useMailStore();
  
  const email = emails.find(e => e.id === selectedEmailId);

  if (!email) return null;

  // Check if it's a threaded mock email
  const isThreaded = email.body.includes('--------------------------------------------------');
  const [expandedHeaders, setExpandedHeaders] = React.useState<number[]>([]);

  const toggleHeader = (idx: number) => {
    if (expandedHeaders.includes(idx)) {
      setExpandedHeaders(expandedHeaders.filter(i => i !== idx));
    } else {
      setExpandedHeaders([...expandedHeaders, idx]);
    }
  };

  if (isThreaded) {
    const rawBlocks = email.body.split('--------------------------------------------------').map(b => b.trim());
    
    // Parse blocks
    const threadBlocks = rawBlocks.map(block => {
      const lines = block.split('\n');
      const name = lines[0];
      let emailAddress = '';
      let toLine = '';
      let dateLine = '';
      let bodyStartIndex = 1;

      if (lines[1].includes('@')) {
        emailAddress = lines[1];
        toLine = lines[2];
        dateLine = lines[3];
        bodyStartIndex = 5;
      } else {
        toLine = lines[1];
        dateLine = lines[2];
        bodyStartIndex = 4;
      }

      const bodyContent = lines.slice(bodyStartIndex).join('\n');

      return {
        name,
        emailAddress,
        toLine,
        dateLine,
        bodyContent
      };
    });

    return (
      <div className="absolute inset-0 bg-[#121212] z-20 flex flex-col animate-in slide-in-from-right duration-200 h-full text-white">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#121212] pt-[max(env(safe-area-inset-top),16px)]">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => selectEmail(null)}
              className="p-1 -ml-1 hover:bg-gray-800 rounded-full transition-colors text-white"
            >
              <ArrowLeft size={26} strokeWidth={1.5} />
            </button>
            <h1 className="text-[18px] font-medium text-white leading-tight ml-2">
              {email.subject}
            </h1>
          </div>
        </div>
        
        <div className="border-t border-gray-800" />

        {/* Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-[140px] bg-[#121212]">
          
          {threadBlocks.map((msg, idx) => {
            const isExpanded = expandedHeaders.includes(idx);
            
            return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div className="flex items-center px-4 py-2 bg-[#1c1c1c] text-[#a0a0a0] text-sm border-y border-gray-800 mt-2 mb-2">
                  <FolderOpen size={16} className="mr-2" />
                  Inbox
                </div>
              )}
              
              <div className="px-5 py-4">
                {/* Header Area */}
                <div 
                  className="flex justify-between items-start mb-4 cursor-pointer"
                  onClick={() => toggleHeader(idx)}
                >
                  {!isExpanded ? (
                    // Collapsed View
                    <div className="flex gap-3 w-full justify-between items-center">
                      <div className="flex gap-3 items-center">
                        {msg.name === email.senderName && email.avatarUrl ? (
                           <img src={email.avatarUrl} alt={msg.name} className="w-11 h-11 rounded-full object-cover shrink-0" />
                        ) : (
                          <div className={clsx(
                            "w-11 h-11 rounded-full flex items-center justify-center font-medium text-lg shrink-0",
                            idx === 0 ? "bg-[#3399FF] text-black" : "bg-gray-800 text-white"
                          )}>
                            {idx === 0 && <span className="absolute w-11 h-11 rounded-full border border-gray-700 opacity-20"></span>}
                            {getInitials(msg.name)}
                          </div>
                        )}
                        <div>
                          <div className="text-[16px] font-medium text-white">
                            {msg.name}
                          </div>
                          <div className="text-[14px] text-[#a0a0a0] flex items-center gap-1 mt-0.5">
                            {msg.toLine.replace(/^To\s+/, 'To: ')} <ChevronDown size={14} className="mt-0.5" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-[13px] text-[#a0a0a0]">
                           {msg.dateLine.split(' at ')[0] || msg.dateLine}
                        </div>
                        <button className="text-[#a0a0a0] p-1 -mr-2">
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Expanded View
                    <div className="flex gap-3 w-full">
                      {msg.name === email.senderName && email.avatarUrl ? (
                           <img src={email.avatarUrl} alt={msg.name} className="w-11 h-11 rounded-full object-cover shrink-0 mt-1" />
                      ) : (
                        <div className={clsx(
                          "w-11 h-11 rounded-full flex items-center justify-center font-medium text-lg shrink-0 mt-1",
                          idx === 0 ? "bg-[#3399FF] text-black" : "bg-gray-800 text-white"
                        )}>
                          {idx === 0 && <span className="absolute w-11 h-11 rounded-full border border-gray-700 opacity-20"></span>}
                          {getInitials(msg.name)}
                        </div>
                      )}
                      <div className="flex-1 relative">
                        <div className="flex justify-between items-start">
                          <div className="text-[16px] font-medium text-[#3399FF] pr-8">
                            {msg.name}
                          </div>
                          <button className="text-[#a0a0a0] p-1 absolute top-[-4px] right-[-8px]">
                            <MoreVertical size={20} />
                          </button>
                        </div>
                        
                        {msg.emailAddress && (
                          <div className="text-[14px] text-[#a0a0a0] mb-2">
                            {msg.emailAddress}
                          </div>
                        )}
                        
                        <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 mb-2 text-[14px]">
                          <div className="text-white">To</div>
                          <div className="text-[#a0a0a0]">
                            {msg.toLine.replace(/^To\s+/, '')}
                          </div>
                        </div>

                        <div className="text-[14px] text-[#a0a0a0]">
                          {msg.dateLine}
                        </div>
                        
                        {idx === 0 && (
                           <div className="absolute -bottom-1 -right-2 p-1.5 bg-[#2a2a2a] rounded-full text-[#a0a0a0]">
                             <Smile size={16} />
                           </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-[16px] text-white leading-relaxed whitespace-pre-wrap mt-2">
                  {msg.bodyContent}
                </div>
              </div>
            </React.Fragment>
            );
          })}
          
          <div className="px-5 py-4 text-[#a0a0a0] flex items-center gap-2 mt-4">
             <div className="w-1.5 h-1.5 rounded-full bg-[#a0a0a0]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-[#a0a0a0]"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-[#a0a0a0]"></div>
          </div>

        </div>

        {/* Bottom Action Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#121212] pb-[env(safe-area-inset-bottom)] border-t border-gray-800 z-10">
          
          {/* Quick Replies */}
          <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar border-b border-gray-800">
            <button className="whitespace-nowrap px-4 py-2 bg-[#2a2a2a] text-white rounded-full text-sm font-medium border border-gray-700">
              Thank you for your confirmation.
            </button>
            <button className="whitespace-nowrap px-4 py-2 bg-[#2a2a2a] text-white rounded-full text-sm font-medium border border-gray-700">
              Thank you!
            </button>
          </div>

          <div className="flex justify-between items-center px-4 py-3">
            <button className="flex items-center gap-1 text-white hover:bg-gray-800 px-3 py-1.5 rounded-lg">
              <Reply size={20} className="scale-x-[-1]" />
              <ChevronDown size={16} />
              <span className="font-medium ml-1">Reply</span>
            </button>
            
            <div className="flex items-center gap-6 text-white">
              <button><Mail size={22} strokeWidth={1.5} /></button>
              <button><Trash2 size={22} strokeWidth={1.5} /></button>
              <button><Archive size={22} strokeWidth={1.5} /></button>
              <button><MoreVertical size={22} strokeWidth={1.5} /></button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular single-email view
  return (
    <div className="absolute inset-0 bg-white z-20 flex flex-col animate-in slide-in-from-right duration-200 h-full">
      <div className="flex items-center justify-between px-4 py-3 bg-white pt-[max(env(safe-area-inset-top),16px)]">
        <button 
          onClick={() => selectEmail(null)}
          className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors text-[#6B6B6B]"
        >
          <ArrowLeft size={26} strokeWidth={1.5} />
        </button>
      </div>
      <div className="border-t border-[#E8E8E8]" />
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-5 py-4 flex justify-between items-start gap-4 border-b border-[#E8E8E8]">
          <h1 className="text-[22px] font-bold text-[#202124] leading-tight flex-1">
            {email.subject}
          </h1>
        </div>
        <div className="px-5 py-4 border-b border-[#E8E8E8]">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              {email.avatarUrl ? (
                <img src={email.avatarUrl} alt={email.senderName} className="w-11 h-11 rounded-full object-cover shrink-0" />
              ) : (
                <div className={clsx("w-11 h-11 rounded-full flex items-center justify-center font-medium text-lg text-white", email.avatarColor)}>
                  {email.avatarInitials}
                </div>
              )}
              <div>
                <div className="text-[16px] font-bold text-[#202124]">
                  {email.senderName}
                </div>
                <div className="text-[14px] text-[#6B6B6B]">
                  {email.senderEmail}
                </div>
              </div>
            </div>
            <div className="text-[14px] text-[#6B6B6B]">
              {email.time}
            </div>
          </div>
        </div>
        <div className="px-5 pt-6 text-[16px] text-[#202124] leading-relaxed whitespace-pre-wrap">
          {email.body}
        </div>
      </div>
    </div>
  );
};
