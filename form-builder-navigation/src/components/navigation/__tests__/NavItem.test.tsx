import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavItem from '../NavItem';

// Mock icon component for testing
const MockIcon = () => <div data-testid="mock-icon">Icon</div>;

describe('NavItem Component', () => {
  const defaultProps = {
    icon: <MockIcon />,
    label: 'Test Label',
  };

  it('renders with required props', () => {
    render(<NavItem {...defaultProps} />);
    
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('renders with default href when not provided', () => {
    render(<NavItem {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#');
  });

  it('renders with custom href when provided', () => {
    render(<NavItem {...defaultProps} href="/custom-path" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/custom-path');
  });

  it('applies default CSS classes', () => {
    render(<NavItem {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass(
      'text-gray-600',
      'hover:text-blue-600',
      'px-3',
      'py-2',
      'rounded-md',
      'text-sm',
      'font-medium',
      'transition-all',
      'duration-300',
      'flex',
      'items-center',
      'gap-2',
      'border',
      'border-gray-200',
      'hover:border-blue-400',
      'hover:shadow-md',
      'group'
    );
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    render(<NavItem {...defaultProps} className={customClass} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass(customClass);
  });

  it('calls onClick handler when clicked and prevents default', () => {
    const mockOnClick = jest.fn();
    render(<NavItem {...defaultProps} onClick={mockOnClick} />);
    
    const link = screen.getByRole('link');
    fireEvent.click(link);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when not provided', () => {
    render(<NavItem {...defaultProps} />);
    
    const link = screen.getByRole('link');
    // Should not throw error when clicking without onClick handler
    fireEvent.click(link);
    
    expect(link).toBeInTheDocument();
  });

  it('prevents default behavior when onClick is provided', () => {
    const mockOnClick = jest.fn();
    render(<NavItem {...defaultProps} onClick={mockOnClick} />);
    
    const link = screen.getByRole('link');
    const event = new MouseEvent('click', { bubbles: true });
    const preventDefaultSpy = jest.spyOn(event, 'preventDefault');
    
    fireEvent(link, event);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('does not show dropdown arrow when hasMenu is false (default)', () => {
    render(<NavItem {...defaultProps} />);
    
    const dropdownArrow = screen.queryByRole('img', { hidden: true });
    expect(dropdownArrow).not.toBeInTheDocument();
  });

  it('shows dropdown arrow when hasMenu is true', () => {
    render(<NavItem {...defaultProps} hasMenu={true} />);
    
    const link = screen.getByRole('link');
    const svg = link.querySelector('svg');
    
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass('w-3', 'h-3', 'ml-1', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-200');
  });

  it('dropdown arrow has correct SVG path when hasMenu is true', () => {
    render(<NavItem {...defaultProps} hasMenu={true} />);
    
    const link = screen.getByRole('link');
    const svg = link.querySelector('svg');
    const path = svg?.querySelector('path');
    
    expect(path).toHaveAttribute('fillRule', 'evenodd');
    expect(path).toHaveAttribute('clipRule', 'evenodd');
    expect(path).toHaveAttribute('d', 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z');
  });

  it('renders with all props provided', () => {
    const mockOnClick = jest.fn();
    const customProps = {
      href: '/test-path',
      icon: <MockIcon />,
      label: 'Full Test Label',
      className: 'custom-styles',
      onClick: mockOnClick,
      hasMenu: true,
    };

    render(<NavItem {...customProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-path');
    expect(link).toHaveClass('custom-styles');
    expect(screen.getByText('Full Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    expect(link.querySelector('svg')).toBeInTheDocument();
    
    fireEvent.click(link);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('has correct accessibility attributes', () => {
    render(<NavItem {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
  });

  it('maintains focus behavior', () => {
    render(<NavItem {...defaultProps} />);
    
    const link = screen.getByRole('link');
    link.focus();
    
    expect(link).toHaveFocus();
  });
}); 