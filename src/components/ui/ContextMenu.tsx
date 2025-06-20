'use client';

import React from 'react';

interface ContextMenuProps {
  onSetAsFirstPage?: () => void;
  onRename?: () => void;
  onCopy?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export default function ContextMenu({ 
  onSetAsFirstPage,
  onRename, 
  onCopy, 
  onDuplicate, 
  onDelete 
}: ContextMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      {/* Settings Header */}
      <div className="px-4 py-3 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Settings</h3>
      </div>
      
      <div className="py-1">
        {/* Set as first page */}
        <button 
          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onSetAsFirstPage}
        >
          <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
          </svg>
          Set as first page
        </button>

                {/* Rename */}
        <button 
          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onRename}
        >
          <svg className="w-4 h-4 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Rename
        </button>
        
        {/* Copy */}
        <button 
          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onCopy}
        >
          <svg className="w-4 h-4 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
            <path d="M3 5a2 2 0 012-2 3 3 0 003 3h6a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L12.414 13H17v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11.586l-3-3a1 1 0 00-1.414 1.414L11.586 11H8a1 1 0 100 2h3.586l-1 1a1 1 0 001.414 1.414l3-3z" />
          </svg>
          Copy
        </button>
        
        {/* Duplicate */}  
        <button 
          className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onDuplicate}
        >
          <svg className="w-4 h-4 mr-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          Duplicate
        </button>
        
        {/* Separator line */}
        <div className="border-t border-gray-100 my-1"></div>
        
        {/* Delete */}
        <button 
          className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"  
          onClick={onDelete}
        >
          <svg className="w-4 h-4 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
} 