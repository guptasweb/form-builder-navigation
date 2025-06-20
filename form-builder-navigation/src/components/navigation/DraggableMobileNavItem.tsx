'use client';

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import MobileNavItem from './MobileNavItem';

interface DraggableMobileNavItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ReactNode;
  };
  index: number;
  onClick: (itemId: string) => void;
  activeDropdown: string | null;
}

export default function DraggableMobileNavItem({ 
  item, 
  index, 
  onClick, 
  activeDropdown 
}: DraggableMobileNavItemProps) {
  return (
    <Draggable draggableId={`mobile-${item.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={snapshot.isDragging ? 'bg-white shadow-lg rounded-md' : ''}
        >
          <MobileNavItem 
            label={item.label} 
            onClick={() => onClick(`${item.id}-mobile`)}
            hasMenu={true}
            className={snapshot.isDragging ? 'bg-white' : ''}
            dragHandleProps={provided.dragHandleProps}
          />
          {activeDropdown === `${item.id}-mobile` && !snapshot.isDragging && (
            <div className="ml-4 mt-1 space-y-1">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Rename</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Copy</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Duplicate</button>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded">Delete</button>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
} 