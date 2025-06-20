'use client';

import React from 'react';

interface ContextMenuProps {
  onRename?: () => void;
  onCopy?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export default function ContextMenu({ 
  onRename, 
  onCopy, 
  onDuplicate, 
  onDelete 
}: ContextMenuProps) {
  return (
    <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="py-1">
        <button 
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onRename}
        >
          Rename
        </button>
        <button 
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onCopy}
        >
          Copy
        </button>
        <button 
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onDuplicate}
        >
          Duplicate
        </button>
        <button 
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-red-600"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
} 