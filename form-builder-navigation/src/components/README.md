# Components

This directory contains all the React components organized by functionality.

## Directory Structure

```
components/
├── navigation/          # Navigation-related components
│   ├── __tests__/      # Tests for navigation components  
│   ├── Navigation.tsx   # Main navigation component
│   ├── NavItem.tsx     # Individual navigation item
│   ├── DraggableNavItem.tsx
│   ├── DraggableMobileNavItem.tsx
│   ├── MobileNavItem.tsx
│   └── index.ts        # Exports for navigation components
├── ui/                 # Reusable UI components
│   ├── AddPageButton.tsx
│   ├── MobileAddPageButton.tsx
│   ├── InteractiveSeparator.tsx
│   ├── StrictModeDroppable.tsx
│   └── index.ts        # Exports for UI components
├── __tests__/          # General component tests
├── index.ts            # Main component exports
└── README.md           # This file
```

## Usage

### Importing Components

```typescript
// Import specific navigation components
import { NavItem, Navigation } from '@/components/navigation';

// Import specific UI components  
import { AddPageButton, InteractiveSeparator } from '@/components/ui';

// Import all components
import { NavItem, AddPageButton } from '@/components';
```

### Component Categories

- **Navigation**: Components related to navigation functionality
- **UI**: Reusable user interface components and utilities

## Testing

Tests are co-located with their respective components in `__tests__` directories.

Run tests:
```bash
npm test                # Run all tests
npm run test:watch     # Run tests in watch mode
``` 