import React from 'react';
import clsx from 'clsx';
import type { Email } from '../data/mockEmails';
import { Avatar } from './Avatar';
import { useMailStore } from '../store/useMailStore';

interface EmailRowProps {
  email: Email;
}

export const EmailRow: React.FC<EmailRowProps> = ({ email }) => {
  const selectEmail = useMailStore(state => state.selectEmail);
  const markAsRead = useMailStore(state => state.markAsRead);

  const handleClick = () => {
    if (email.isUnread) {
      markAsRead(email.id);
    }
    selectEmail(email.id);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'flex items-start gap-3 px-4 py-3 cursor-pointer active:bg-gray-100 transition-colors relative',
        email.isUnread ? 'bg-white' : 'bg-transparent'
      )}
    >
      {/* Unread dot */}
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2 w-[6px] h-[6px] flex-shrink-0">
        {email.isUnread && (
          <div className="w-full h-full bg-[#1478C9] rounded-full" />
        )}
      </div>

      <div className="pt-1 ml-1">
        <Avatar colorClass={email.avatarColor} initials={email.avatarInitials} size="md" />
      </div>

      <div className="flex-1 min-w-0 border-b border-[#E8E8E8] pb-3">
        <div className="flex justify-between items-baseline mb-0.5">
          <span
            className={clsx(
              'text-[18px] truncate pr-2',
              email.isUnread ? 'font-bold text-[#202124]' : 'font-semibold text-[#202124]'
            )}
          >
            {email.senderName}
          </span>
          <span
            className={clsx(
              'text-[14px] whitespace-nowrap flex-shrink-0',
              email.isUnread ? 'font-semibold text-[#1478C9]' : 'text-[#6B6B6B]'
            )}
          >
            {email.time}
          </span>
        </div>

        <div className="flex justify-between items-center mb-0.5">
          <span
            className={clsx(
              'text-[16px] truncate pr-2',
              email.isUnread ? 'font-semibold text-[#202124]' : 'text-[#202124]'
            )}
          >
            {email.subject}
          </span>
          
          {email.isUnread && (
            <div className="bg-[#DCEEFF] text-[#0f62a6] font-bold text-[12px] px-2 py-0.5 rounded-md flex-shrink-0 ml-2">
              10
            </div>
          )}
        </div>

        <div className="text-[15px] text-[#6B6B6B] truncate">
          {email.preview}
        </div>
      </div>
    </div>
  );
};
