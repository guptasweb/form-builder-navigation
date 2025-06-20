'use client';

import React from 'react';

interface AddPageButtonProps {
  onClick: () => void;
  className?: string;
}

export default function AddPageButton({ onClick, className = "" }: AddPageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-gray-600 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:shadow-md ${className}`}
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
      Add Page
    </button>
  );
} 