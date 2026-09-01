import React from 'react';
import clsx from 'clsx';

interface AvatarProps {
  colorClass: string;
  initials?: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar: React.FC<AvatarProps> = ({ colorClass, initials, imageUrl, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-11 h-11 text-[17px]',
    lg: 'w-14 h-14 text-xl',
  };

  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt={initials} 
        className={clsx('rounded-full object-cover shrink-0', sizeClasses[size])} 
      />
    );
  }

  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center text-white font-bold shrink-0',
        colorClass,
        sizeClasses[size]
      )}
    >
      {initials}
    </div>
  );
};
