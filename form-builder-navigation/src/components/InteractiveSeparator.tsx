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
      {/* Main separator SVG */}
      <img src="/dashed-line.svg" alt="separator" className="transition-opacity duration-200" />
      
      {/* Plus icon that appears on hover */}
      {isHovered && (
        <button
          onClick={onClick}
          className="ml-1 p-1 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 transform scale-0 group-hover:scale-100"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      
      {/* Another separator SVG after the plus icon */}
      {isHovered && (
        <img 
          src="/dashed-line.svg" 
          alt="separator" 
          className="ml-1 transition-opacity duration-200 opacity-0 group-hover:opacity-100" 
        />
      )}
    </div>
  );
} 