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
  onPageSelect: (pageId: string) => void;
  onPageActivate: (pageId: string) => void;
  activeDropdown: string | null;
  activePage: string;
  focusedPage: string | null;
  onContextMenuAction?: (action: string, itemId: string) => void;
}

export default function DraggableNavItem({ 
  item, 
  index, 
  onClick, 
  onPageSelect,
  onPageActivate,
  activeDropdown,
  activePage,
  focusedPage,
  onContextMenuAction
}: DraggableNavItemProps) {
  const clickTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleContextAction = (action: string) => {
    onContextMenuAction?.(action, item.id);
  };

  const handleNavItemClick = () => {
    // If item is already focused, activate it on click
    if (focusedPage === item.id) {
      onPageActivate(item.id);
      return;
    }

    // Clear any existing timer
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      // This is a double-click, activate the item
      onPageActivate(item.id);
    } else {
      // Set a timer for single-click
      clickTimerRef.current = setTimeout(() => {
        onPageSelect(item.id);
        clickTimerRef.current = null;
      }, 300); // 300ms delay to detect double-click
    }
  };

  const handleNavItemDoubleClick = () => {
    // This is redundant now, but keeping for compatibility
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
    }
    onPageActivate(item.id);
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
            onClick={handleNavItemClick}
            onDoubleClick={handleNavItemDoubleClick}
            onDropdownClick={() => onClick(item.id)}
            isActive={activePage === item.id}
            isFocused={focusedPage === item.id}
            className={snapshot.isDragging ? 'shadow-lg bg-white' : ''}
            dragHandleProps={provided.dragHandleProps}
          />
          {activeDropdown === item.id && !snapshot.isDragging && (
            <ContextMenu
              onSetAsFirstPage={() => handleContextAction('setAsFirstPage')}
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