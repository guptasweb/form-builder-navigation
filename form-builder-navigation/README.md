# Form Builder Navigation

A React-based navigation component with drag-and-drop functionality, dual-state management, and context menus.

## Navigation Features

### Navigation States
The navigation supports two distinct states for better user interaction:

- **Focused State**: Visual selection when a nav item is clicked
  - White background, black text, yellow icons, blue border
  - Dropdown menu (3 dots) is hidden for clean appearance
  
- **Active State**: Functional activation when a nav item is double-clicked
  - White background, black text, yellow icons, blue border  
  - Dropdown menu (3 dots) is visible for access to context options

### Interaction Behaviors

- **Single Click**: Focuses/selects a navigation item (visual feedback)
- **Double Click**: Activates a navigation item (functional state)
- **Context Menu**: Right-click or click the 3-dot menu to access:
  - Set as first page (moves item to top of navigation)
  - Rename (edit item name)
  - Copy (duplicate item properties)
  - Duplicate (create identical item)
  - Delete (remove item)

### Drag & Drop
- Drag navigation items to reorder them
- Visual feedback during dragging
- Automatic position updates

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
