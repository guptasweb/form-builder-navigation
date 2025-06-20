'use client';

import React from 'react';

interface NavItemProps {
  href?: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  hasMenu?: boolean;
}

export default function NavItem({ href = "#", icon, label, className = "", onClick, hasMenu = false }: NavItemProps) {
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
      className={`text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md group ${className}`}
    >
      {icon}
      {label}
      {hasMenu && (
        <svg className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )}
    </a>
  );
} 