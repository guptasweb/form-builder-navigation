'use client';

import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../ui/StrictModeDroppable';
import AddPageButton from '../ui/AddPageButton';
import MobileAddPageButton from '../ui/MobileAddPageButton';
import DraggableNavItem from './DraggableNavItem';
import DraggableMobileNavItem from './DraggableMobileNavItem';
import InteractiveSeparator from '../ui/InteractiveSeparator';

interface NavItemData {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [navItems, setNavItems] = useState<NavItemData[]>([
    {
      id: 'info',
      label: 'Info',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'details',
      label: 'Details',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 'other',
      label: 'Other',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 'ending',
      label: 'Ending',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10.586 9.5z" clipRule="evenodd" />
        </svg>
      )
    }
  ]);
  
  const [activePage, setActivePage] = useState<string>(navItems[0]?.id || 'info');
  const [focusedPage, setFocusedPage] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handlePageSelect = (pageId: string) => {
    setFocusedPage(pageId);
    setActiveDropdown(null);
  };

  const handlePageActivate = (pageId: string) => {
    setActivePage(pageId);
    setFocusedPage(null); // Clear focused state when item becomes active
  };

  const handleContextMenuAction = (action: string, itemId: string) => {
    switch (action) {
      case 'setAsFirstPage':
        // Move item to first position
        const itemIndex = navItems.findIndex(item => item.id === itemId);
        if (itemIndex > 0) {
          const itemToMove = navItems[itemIndex];
          const newItems = [itemToMove, ...navItems.filter(item => item.id !== itemId)];
          setNavItems(newItems);
        }
        break;
      case 'rename':
        break;
      case 'copy':
        break;
      case 'duplicate':
        break;
      case 'delete':
        break;
    }
  };

  const handleAddPage = () => {
    const newPageNumber = navItems.length + 1;
    const newItem: NavItemData = {
      id: `page-${newPageNumber}`,
      label: `Page ${newPageNumber}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v10h8V6H6z" clipRule="evenodd" />
        </svg>
      )
    };
    setNavItems([...navItems, newItem]);
  };

  const handleAddPageAtPosition = (position: number) => {
    const newPageNumber = navItems.length + 1;
    const newItem: NavItemData = {
      id: `page-${newPageNumber}`,
      label: `Page ${newPageNumber}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v10h8V6H6z" clipRule="evenodd" />
        </svg>
      )
    };
    const newItems = [...navItems];
    newItems.splice(position + 1, 0, newItem);
    setNavItems(newItems);
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(navItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNavItems(items);
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center relative">
            <DragDropContext onDragEnd={handleDragEnd}>
              <StrictModeDroppable droppableId="nav-items" direction="horizontal">
                {(provided: any) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex items-center"
                  >
                    {navItems.map((item, index) => (
                      <React.Fragment key={item.id}>
                        <DraggableNavItem
                          item={item}
                          index={index}
                          onClick={handleNavItemClick}
                          onPageSelect={handlePageSelect}
                          onPageActivate={handlePageActivate}
                          activeDropdown={activeDropdown}
                          activePage={activePage}
                          focusedPage={focusedPage}
                          onContextMenuAction={handleContextMenuAction}
                        />
                        {index < navItems.length - 1 && (
                          <InteractiveSeparator 
                            onClick={() => handleAddPageAtPosition(index)}
                          />
                        )}
                      </React.Fragment>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
            <InteractiveSeparator 
              onClick={() => handleAddPageAtPosition(navItems.length - 1)}
            />
            <AddPageButton onClick={handleAddPage} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <DragDropContext onDragEnd={handleDragEnd}>
                <StrictModeDroppable droppableId="mobile-nav-items" direction="vertical">
                  {(provided: any) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="space-y-1"
                    >
                      {navItems.map((item, index) => (
                        <React.Fragment key={item.id}>
                          <DraggableMobileNavItem
                            item={item}
                            index={index}
                            onClick={handleNavItemClick}
                            onPageSelect={handlePageSelect}
                            onPageActivate={handlePageActivate}
                            activeDropdown={activeDropdown}
                            activePage={activePage}
                            focusedPage={focusedPage}
                            onContextMenuAction={handleContextMenuAction}
                          />
                          {index < navItems.length - 1 && (
                            <div className="flex justify-center py-1">
                              <InteractiveSeparator 
                                onClick={() => handleAddPageAtPosition(index)}
                              />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </StrictModeDroppable>
              </DragDropContext>
              <div className="flex justify-center py-1">
                <InteractiveSeparator 
                  onClick={() => handleAddPageAtPosition(navItems.length - 1)}
                />
              </div>
              <MobileAddPageButton onClick={handleAddPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}