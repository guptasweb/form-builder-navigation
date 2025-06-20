'use client';

import React from 'react';

interface MobileNavItemProps {
  href?: string;
  label: string;
  className?: string;
  onClick?: () => void;
  hasMenu?: boolean;
  dragHandleProps?: any; // For react-beautiful-dnd
}

export default function MobileNavItem({ href = "#", label, className = "", onClick, hasMenu = false, dragHandleProps }: MobileNavItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-gray-400 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between group hover:bg-gray-50 transition-all duration-300 ${className}`}
      {...dragHandleProps}
    >
      {label}
      {hasMenu && (
        <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </a>
  );
} 