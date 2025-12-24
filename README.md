# MDD Web Project

## Tech Stack

- **Framework**: Next.js 15.4.7 with App Router
- **Frontend**: React 19.1.0, TypeScript
- **State Management**: Redux Toolkit, React Redux
- **Styling**: Styled Components, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: Prisma
- **Testing**: Jest, React Testing Library
- **Other**: CKEditor, React Markdown, React Toastify

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (create `.env.local` based on `.env.example` if available)
4. Run development server: `npm run dev`
5. Build for production: `npm run build`
6. Start production server: `npm start`
7. Run tests: `npm test`
8. Lint code: `npm run lint`

## Folder Structure Overview

- `src/app/`: Next.js app router pages and layouts
  - `(admin)/`: Admin panel routes
  - `(user)/`: User-facing routes (home, blogs, auth, etc.)
  - `providers/`: Context and provider components
  - `screens/`: Screen components for admin and client
- `src/components/`: Reusable UI components (buttons, inputs, pagination)
- `src/redux/`: Redux store, slices, and hooks
- `src/hooks/`: Custom React hooks
- `src/utils/`: Utility functions and data
- `src/types/`: TypeScript type definitions
- `src/styles/`: Global styles, themes, and typography
- `src/assets/`: Static assets (images, SVGs)
- `public/`: Public static files
- `__tests__/`: Test files
