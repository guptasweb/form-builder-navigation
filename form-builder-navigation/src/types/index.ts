// Navigation types
export interface NavItemProps {
  href?: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
  onDropdownClick?: () => void;
  hasMenu?: boolean;
  type?: 'link' | 'button' | 'auto';
  dragHandleProps?: any; // For react-beautiful-dnd
}

export interface PageItem {
  id: string;
  title: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface NavigationProps {
  pages?: PageItem[];
  onReorder?: (pages: PageItem[]) => void;
} 