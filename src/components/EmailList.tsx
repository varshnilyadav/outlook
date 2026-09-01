import React from 'react';
import { EmailRow } from './EmailRow';
import { useMailStore } from '../store/useMailStore';

export const EmailList: React.FC = () => {
  const { emails, activeTab, searchQuery } = useMailStore();

  const filteredEmails = emails.filter((email) => {
    // Tab filter
    if (activeTab === 'Focused' && !email.isFocused) return false;
    if (activeTab === 'Other' && email.isFocused) return false;

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        email.subject.toLowerCase().includes(q) ||
        email.senderName.toLowerCase().includes(q) ||
        email.preview.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const groupedEmails = filteredEmails.reduce((acc, email) => {
    if (!acc[email.dateGroup]) {
      acc[email.dateGroup] = [];
    }
    acc[email.dateGroup].push(email);
    return acc;
  }, {} as Record<string, typeof emails>);

  const groups = ['Today', 'Yesterday', 'Earlier'].filter((group) => groupedEmails[group]?.length > 0);

  if (filteredEmails.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-[#6B6B6B] p-8 mt-10">
        <div className="w-16 h-16 mb-4 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-2xl">📬</span>
        </div>
        <p className="text-lg font-medium">All caught up!</p>
        <p className="text-sm">No messages to show.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-[#f0f2f5] no-scrollbar pb-24">
      {groups.map((group) => (
        <div key={group} className="mb-2">
          {group !== 'Today' && (
            <div className="px-5 py-3 text-[16px] font-bold text-[#6B6B6B] bg-[#f0f2f5]">
              {group}
            </div>
          )}
          <div className="bg-[#f0f2f5]">
            {groupedEmails[group].map((email) => (
              <EmailRow key={email.id} email={email} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
