# AI Video Marketing Platform

A Next.js-based platform for creating and managing AI-powered marketing videos.

## Prerequisites

- Node.js 18.17 or later
- npm 9.6.7 or later
- Git (optional for version control)

## Getting Started

1. Clone the repository (if using Git):
   ```bash
   git clone [repository-url]
   cd ai-video-marketing-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages and layouts
├── components/       # Reusable UI components
├── lib/             # Library code, utilities
├── utils/           # Utility functions
├── styles/          # Global styles and Tailwind CSS config
├── types/           # TypeScript type definitions
├── hooks/           # Custom React hooks
├── contexts/        # React context providers
├── services/        # External service integrations
└── constants/       # Constant values and configuration
```

## Available Scripts

- `npm run dev` - Run development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint
- Prettier 