'use client';

import React from 'react';

interface MobileNavItemProps {
  href?: string;
  icon?: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onDropdownClick?: () => void;
  isActive?: boolean;
  isFocused?: boolean;
  dragHandleProps?: any; // For react-beautiful-dnd
}

export default function MobileNavItem({ 
  href, 
  icon, 
  label, 
  className = "", 
  onClick, 
  onDoubleClick,
  onDropdownClick,
  isActive = false,
  isFocused = false,
  dragHandleProps 
}: MobileNavItemProps) {
  const baseClasses = "block px-3 py-2 rounded-lg text-base font-medium flex items-center justify-between group transition-all duration-300";
  
  // Active and focused state styling
  const stateClasses = isFocused 
    ? "bg-white text-black border-2 border-blue-500"
    : isActive 
    ? "bg-white text-black border-2 border-gray-300" 
    : "text-gray-500 hover:text-gray-700 bg-gray-200 hover:bg-gray-300";
  
  const combinedClasses = `${baseClasses} ${stateClasses} ${className}`;

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the main onClick
    if (onDropdownClick) {
      onDropdownClick();
    }
  };

  const iconClasses = isFocused
    ? "text-yellow-500"
    : isActive 
    ? "text-yellow-500" 
    : "text-gray-500 group-hover:text-gray-600";

  const dropdownArrow = (
    <button
      type="button"
      onClick={handleDropdownClick}
      className={`p-1 rounded hover:bg-gray-100 ${isFocused ? 'hidden' : isActive ? 'block' : 'hidden'}`}
      aria-label="Toggle dropdown menu"
    >
      <svg className={`w-3 h-3 ${isActive ? 'text-gray-500' : 'text-current'}`} fill="currentColor" viewBox="0 0 20 20">
        <circle cx="10" cy="4" r="1.5"/>
        <circle cx="10" cy="10" r="1.5"/>
        <circle cx="10" cy="16" r="1.5"/>
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
        onClick={onClick}
        onDoubleClick={onDoubleClick}
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
      onDoubleClick={onDoubleClick}
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