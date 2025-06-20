'use client';

import React from 'react';

interface MobileNavItemProps {
  href?: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  onDropdownClick?: () => void;
  hasMenu?: boolean;
  isActive?: boolean;
  dragHandleProps?: any; // For react-beautiful-dnd
}

export default function MobileNavItem({ 
  href, 
  icon, 
  label, 
  className = "", 
  onClick, 
  onDropdownClick,
  hasMenu = false, 
  isActive = false,
  dragHandleProps 
}: MobileNavItemProps) {
  const baseClasses = "block px-3 py-2 rounded-md text-base font-medium flex items-center justify-between group transition-all duration-300";
  
  // Active state styling
  const activeClasses = isActive 
    ? "bg-blue-100 text-blue-700 border-2 border-blue-300" 
    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50";
  
  const combinedClasses = `${baseClasses} ${activeClasses} ${className}`;

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the main onClick
    if (onDropdownClick) {
      onDropdownClick();
    }
  };

  const iconClasses = isActive 
    ? "text-blue-500" 
    : "text-gray-400 group-hover:text-yellow-500";

  const dropdownArrow = hasMenu && (
    <button
      type="button"
      onClick={handleDropdownClick}
      className="p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100"
      aria-label="Toggle dropdown menu"
    >
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  );

  // Auto-detect type: if href is provided and no onClick, it's a link
  const isLink = href && !onClick;

  // Render as link for navigation
  if (isLink) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...dragHandleProps}
      >
        <div className="flex items-center gap-2">
          {icon && (
            <span className={`${iconClasses} transition-colors duration-300`}>
              {icon}
            </span>
          )}
          {label}
        </div>
        {dropdownArrow}
      </a>
    );
  }

  // Render as button for interactions
  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedClasses}
      {...dragHandleProps}
    >
      <div className="flex items-center gap-2">
        {icon && (
          <span className={`${iconClasses} transition-colors duration-300`}>
            {icon}
          </span>
        )}
        {label}
      </div>
      {dropdownArrow}
    </button>
  );
} 