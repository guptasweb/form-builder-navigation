'use client';

import React from 'react';

interface NavItemProps {
  href?: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  onDropdownClick?: () => void;
  hasMenu?: boolean;
  type?: 'link' | 'button' | 'auto';
  dragHandleProps?: any; // For react-beautiful-dnd
}

export default function NavItem({ 
  href, 
  icon, 
  label, 
  className = "", 
  onClick, 
  onDropdownClick,
  hasMenu = false,
  type = 'auto', // Auto-detect based on props
  dragHandleProps
}: NavItemProps) {
  const baseClasses = "text-gray-400 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-gray-100 hover:bg-gray-50 hover:shadow-sm group";
  
  // Auto-detect type: if href is provided and no onClick, it's a link
  const isLink = href && !onClick;
  
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the main onClick
    if (onDropdownClick) {
      onDropdownClick();
    }
  };

  const dropdownArrow = hasMenu && (
    <button
      type="button"
      onClick={handleDropdownClick}
      className="ml-1 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100"
      aria-label="Toggle dropdown menu"
    >
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );

  // Render as link for navigation
  if (isLink) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        {...dragHandleProps}
      >
        <span className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
          {icon}
        </span>
        {label}
        {dropdownArrow}
      </a>
    );
  }

  // Render as button for interactions
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      {...dragHandleProps}
    >
      <span className="text-gray-400 group-hover:text-yellow-500 transition-colors duration-300">
        {icon}
      </span>
      {label}
      {dropdownArrow}
    </button>
  );
} 