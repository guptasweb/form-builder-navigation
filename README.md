# Form Builder Navigation

A modern React-based navigation component built with Next.js, featuring drag-and-drop functionality, dual-state management, context menus, and responsive design. Perfect for form builders, dashboards, or any application requiring dynamic navigation management.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation & Setup

1. **Clone and navigate to the project:**
   ```bash
   git clone <repository-url>
   cd form-builder-navigation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
form-builder-navigation/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── navigation/        # Navigation-specific components
│   │   │   ├── Navigation.tsx           # Main navigation container
│   │   │   ├── NavItem.tsx             # Desktop navigation item
│   │   │   ├── MobileNavItem.tsx       # Mobile navigation item
│   │   │   ├── DraggableNavItem.tsx    # Draggable wrapper for desktop
│   │   │   └── DraggableMobileNavItem.tsx # Draggable wrapper for mobile
│   │   ├── ui/                # UI utility components
│   │   │   ├── ContextMenu.tsx         # Right-click context menu
│   │   │   ├── AddPageButton.tsx       # Add new page button
│   │   │   ├── MobileAddPageButton.tsx # Mobile add page button
│   │   │   ├── InteractiveSeparator.tsx # Drag separator with add functionality
│   │   │   └── StrictModeDroppable.tsx # React Beautiful DnD wrapper
│   │   └── index.ts           # Component exports
│   └── types/
│       └── index.ts           # TypeScript type definitions
├── public/                    # Static assets
├── __tests__/                 # Jest test files
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── jest.config.js           # Jest testing configuration
└── next.config.js           # Next.js configuration
```

## ✨ Features

### 🎯 Dual-State Navigation System
The navigation implements a sophisticated dual-state system for optimal user experience:

#### **Focused State** (Visual Selection)
- **Trigger**: Single click on navigation item
- **Appearance**: White background, black text, yellow icons, blue border
- **Behavior**: Provides visual feedback, dropdown menu hidden for clean UI
- **Purpose**: Indicates current selection without functional changes

#### **Active State** (Functional Activation)  
- **Trigger**: Double click on navigation item OR single click on already focused item
- **Appearance**: White background, black text, yellow icons, gray border
- **Behavior**: Shows dropdown menu (3 dots) for accessing context options
- **Purpose**: Represents the functionally active page/section

### 🖱️ Interaction Behaviors

| Action | Result | Visual Feedback |
|--------|--------|-----------------|
| **Single Click** | Focus item | Blue border, yellow icons, hidden dropdown |
| **Double Click** | Activate item | Gray border, yellow icons, visible dropdown |
| **Click Focused Item** | Activate item | Transitions from focused to active state |
| **Right Click / 3-Dot Menu** | Open context menu | Context menu overlay |

### 📱 Responsive Design
- **Desktop**: Horizontal navigation bar with drag handles
- **Mobile**: Collapsible hamburger menu with vertical layout
- **Touch-friendly**: Optimized touch targets for mobile devices
- **Adaptive**: Seamlessly switches between desktop and mobile layouts

### 🎛️ Context Menu Options
Right-click any navigation item or click the 3-dot menu to access:

- **🚩 Set as first page** - Move item to the top of navigation
- **✏️ Rename** - Edit the item's display name
- **📋 Copy** - Duplicate item properties
- **📑 Duplicate** - Create an identical navigation item
- **🗑️ Delete** - Remove item from navigation

### 🔄 Drag & Drop Functionality
- **Reorder items**: Drag navigation items to rearrange their order
- **Visual feedback**: Items show drag state during interaction
- **Interactive separators**: Hover between items to add new pages at specific positions
- **Cross-platform**: Works on both desktop and mobile devices
- **Smooth animations**: Powered by react-beautiful-dnd

### ➕ Dynamic Page Management
- **Add pages**: Multiple ways to add new navigation items
  - Main "Add Page" button
  - Interactive separators between items
  - Context menu duplication
- **Smart positioning**: Add pages at specific positions in the navigation
- **Auto-numbering**: New pages automatically get incremental names

## 🛠️ Technical Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Drag & Drop**: react-beautiful-dnd
- **Testing**: Jest + React Testing Library
- **Icons**: Inline SVG with Tailwind classes
- **State Management**: React hooks (useState, useRef)

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test -- --coverage
```

Test files are located in:
- `src/__tests__/` - General component tests
- `src/components/navigation/__tests__/` - Navigation-specific tests

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify color schemes in component files
- **Spacing**: Adjust padding, margins using Tailwind classes
- **Animations**: Customize transition durations and effects
- **Responsive breakpoints**: Modify mobile/desktop switching points

### Configuration Files
- `tailwind.config.js` - Tailwind CSS customization
- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript compiler options

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
The easiest deployment option:

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Deployment Options
- **Netlify**: Static site deployment
- **AWS**: Using AWS Amplify or S3 + CloudFront
- **Docker**: Containerized deployment
- **Self-hosted**: Any Node.js hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Run tests: `npm run test`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs
4. Provide your environment details (Node.js version, OS, etc.)

---

Built with ❤️ using Next.js, React, and TypeScript
