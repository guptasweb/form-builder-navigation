'use client';

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import NavItem from './NavItem';
import { ContextMenu } from '../ui';

interface DraggableNavItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ReactNode;
  };
  index: number;
  onClick: (itemId: string) => void;
  activeDropdown: string | null;
  onContextMenuAction?: (action: string, itemId: string) => void;
}

export default function DraggableNavItem({ 
  item, 
  index, 
  onClick, 
  activeDropdown,
  onContextMenuAction
}: DraggableNavItemProps) {
  const handleContextAction = (action: string) => {
    onContextMenuAction?.(action, item.id);
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`relative ${snapshot.isDragging ? 'z-50' : ''}`}
        >
          <NavItem
            icon={item.icon}
            label={item.label}
            onDropdownClick={() => onClick(item.id)}
            hasMenu={true}
            className={snapshot.isDragging ? 'shadow-lg bg-white' : ''}
            dragHandleProps={provided.dragHandleProps}
          />
          {activeDropdown === item.id && !snapshot.isDragging && (
            <ContextMenu
              onRename={() => handleContextAction('rename')}
              onCopy={() => handleContextAction('copy')}
              onDuplicate={() => handleContextAction('duplicate')}
              onDelete={() => handleContextAction('delete')}
            />
          )}
        </div>
      )}
    </Draggable>
  );
} 