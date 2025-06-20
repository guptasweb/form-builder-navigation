'use client';

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import NavItem from './NavItem';

interface DraggableNavItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ReactNode;
  };
  index: number;
  onClick: (itemId: string) => void;
  activeDropdown: string | null;
}

export default function DraggableNavItem({ 
  item, 
  index, 
  onClick, 
  activeDropdown 
}: DraggableNavItemProps) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`relative ${snapshot.isDragging ? 'z-50' : ''}`}
        >
          <div {...provided.dragHandleProps}>
            <NavItem
              icon={item.icon}
              label={item.label}
              onClick={() => onClick(item.id)}
              hasMenu={true}
              className={snapshot.isDragging ? 'shadow-lg bg-white' : ''}
            />
          </div>
          {activeDropdown === item.id && !snapshot.isDragging && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              <div className="py-1">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Rename</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Copy</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Duplicate</button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-red-600">Delete</button>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
} 