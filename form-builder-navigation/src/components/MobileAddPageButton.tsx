'use client';

import React from 'react';

interface MobileAddPageButtonProps {
  onClick: () => void;
  className?: string;
}

export default function MobileAddPageButton({ onClick, className = "" }: MobileAddPageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${className}`}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
      Add Page
    </button>
  );
} 