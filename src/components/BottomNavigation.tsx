import React from 'react';
import { Mail, Calendar, LayoutGrid } from 'lucide-react';
import { useMailStore } from '../store/useMailStore';
import clsx from 'clsx';

export const BottomNavigation: React.FC = () => {
  const { currentView, setCurrentView } = useMailStore();

  const navItems = [
    { id: 'inbox', label: 'Email', icon: Mail },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'apps', label: 'Apps', icon: LayoutGrid },
  ] as const;

  return (
    <div className="fixed bottom-0 w-full max-w-[430px] bg-white border-t border-[#E8E8E8] pb-[env(safe-area-inset-bottom)] z-30">
      <div className="flex justify-around items-center h-[60px]">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = currentView === id || (id === 'inbox' && currentView === 'email-detail');
          return (
            <button
              key={id}
              onClick={() => setCurrentView(id)}
              className={clsx(
                'flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors',
                isActive ? 'text-[#1478C9]' : 'text-[#6B6B6B]'
              )}
            >
              <Icon 
                size={24} 
                strokeWidth={isActive ? 2.5 : 2} 
                className={isActive ? 'fill-current' : 'fill-transparent'} 
              />
              <span className={clsx('text-[11px]', isActive ? 'font-semibold' : 'font-medium')}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
