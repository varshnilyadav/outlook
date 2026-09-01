import React, { useState } from 'react';
import { X, Send, Paperclip } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';

export const ComposeEmail: React.FC = () => {
  const { isComposeOpen, setComposeOpen, addEmail } = useMailStore();
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (!isComposeOpen) return null;

  const handleSend = () => {
    if (!to || !subject) return;

    addEmail({
      senderName: 'Me',
      senderEmail: 'me@university.edu',
      subject,
      preview: message.substring(0, 50) + '...',
      body: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateGroup: 'Today',
      isUnread: false,
      avatarColor: 'bg-blue-600',
      avatarInitials: 'ME',
      isFocused: true,
    });
    
    setComposeOpen(false);
    setTo('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 animate-in fade-in duration-200">
      <div className="bg-white w-full h-[90vh] sm:h-auto sm:max-w-[430px] sm:rounded-2xl rounded-t-2xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-8 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8E8E8]">
          <button 
            onClick={() => setComposeOpen(false)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-[#202124]" />
          </button>
          <span className="font-semibold text-[18px]">New Message</span>
          <button 
            onClick={handleSend}
            disabled={!to || !subject}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
          >
            <Send size={22} className="text-[#1478C9]" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center px-4 py-3 border-b border-[#E8E8E8]">
            <span className="text-[#6B6B6B] w-12 text-[16px]">To</span>
            <input 
              type="text" 
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 outline-none text-[16px] text-[#202124]" 
              autoFocus
            />
          </div>
          <div className="flex items-center px-4 py-3 border-b border-[#E8E8E8]">
            <span className="text-[#6B6B6B] w-12 text-[16px]">Subject</span>
            <input 
              type="text" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="flex-1 outline-none text-[16px] text-[#202124] font-medium" 
            />
          </div>
          <div className="p-4 flex-1 h-full">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full h-[60vh] outline-none text-[16px] text-[#202124] resize-none"
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="border-t border-[#E8E8E8] px-4 py-3 flex items-center bg-gray-50 pb-[env(safe-area-inset-bottom)] sm:rounded-b-2xl">
          <button className="p-2 hover:bg-gray-200 rounded-full text-[#6B6B6B] transition-colors">
            <Paperclip size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
