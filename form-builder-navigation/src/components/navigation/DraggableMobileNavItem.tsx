'use client';

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import MobileNavItem from './MobileNavItem';
import { ContextMenu } from '../ui';

interface DraggableMobileNavItemProps {
  item: {
    id: string;
    label: string;
    icon: React.ReactNode;
  };
  index: number;
  onClick: (itemId: string) => void;
  onPageSelect: (pageId: string) => void;
  activeDropdown: string | null;
  activePage: string;
  onContextMenuAction?: (action: string, itemId: string) => void;
}

export default function DraggableMobileNavItem({ 
  item, 
  index, 
  onClick, 
  onPageSelect,
  activeDropdown,
  activePage,
  onContextMenuAction
}: DraggableMobileNavItemProps) {
  const handleContextAction = (action: string) => {
    onContextMenuAction?.(action, item.id);
  };

  const handleNavItemClick = () => {
    onPageSelect(item.id);
  };

  const mobileItemId = `${item.id}-mobile`;

  return (
    <Draggable draggableId={mobileItemId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={snapshot.isDragging ? 'bg-white shadow-lg rounded-md' : ''}
        >
          <MobileNavItem 
            icon={item.icon}
            label={item.label} 
            onClick={handleNavItemClick}
            onDropdownClick={() => onClick(mobileItemId)}
            hasMenu={true}
            isActive={activePage === item.id}
            className={snapshot.isDragging ? 'bg-white' : ''}
            dragHandleProps={provided.dragHandleProps}
          />
          {activeDropdown === mobileItemId && !snapshot.isDragging && (
            <div className="ml-4 mt-1">
              <ContextMenu
                onRename={() => handleContextAction('rename')}
                onCopy={() => handleContextAction('copy')}
                onDuplicate={() => handleContextAction('duplicate')}
                onDelete={() => handleContextAction('delete')}
              />
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
} 