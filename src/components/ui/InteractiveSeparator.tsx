'use client';

import React, { useState } from 'react';

interface InteractiveSeparatorProps {
  onClick?: () => void;
  className?: string;
}

export default function InteractiveSeparator({ onClick, className = "" }: InteractiveSeparatorProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative flex items-center group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main separator dashes */}
      <span className="text-gray-300 text-sm font-mono tracking-tighter transition-opacity duration-200">
        ----
      </span>
      
      {/* Plus icon that appears on hover */}
      {isHovered && (
        <button
          onClick={onClick}
          className="ml-1 p-1 rounded-full bg-white hover:bg-gray-50 text-black border border-gray-200 hover:border-gray-300 shadow-sm transition-all duration-200 transform scale-0 group-hover:scale-100"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      
      {/* Another separator dashes after the plus icon */}
      {isHovered && (
        <span className="ml-1 text-gray-300 text-sm font-mono tracking-tighter transition-opacity duration-200 opacity-0 group-hover:opacity-100">
          ----
        </span>
      )}
    </div>
  );
} 