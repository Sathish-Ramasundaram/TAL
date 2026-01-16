# React 29 Storybook Demo

This is a demo project showcasing React 19 with Storybook using Rsbuild as the build tool.

## Project Overview

This project demonstrates how to set up a modern React application with:
- React 19
- TypeScript
- Rsbuild for fast builds
- Storybook for component development and documentation

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Steps to Create This Project

Follow these steps to recreate this project from scratch:

### 1. Create a New Rsbuild React Project

```bash
npx create-rsbuild@latest react29-storybook-demo14 --template react-ts
cd react29-storybook-demo14
```

**Output:** This creates a new directory with a basic React TypeScript project structure, including:
- `package.json` with React and Rsbuild dependencies
- `rsbuild.config.ts` for build configuration
- `tsconfig.json` for TypeScript settings
- Basic `src/App.tsx` and `src/index.tsx` files
- A `public/` directory for static assets

### 2. Install Storybook with Rsbuild Framework

```bash
npm install --save-dev storybook storybook-react-rsbuild @storybook/addon-a11y @storybook/addon-docs
```

**Output:** Adds Storybook dependencies to `package.json`.

### 3. Initialize Storybook

```bash
npx storybook@latest init
```

When prompted, select "React" as the framework and choose the Rsbuild option if available.

**Output:** This generates:
- `.storybook/` directory with configuration files
- `src/stories/` directory with example stories
- Updates `package.json` with Storybook scripts

### 4. Configure Storybook for Rsbuild

Update `.storybook/main.ts` to use the Rsbuild framework:

```typescript
import type { StorybookConfig } from '@storybook/react-rsbuild';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-rsbuild',
    options: {},
  },
};

export default config;
```

**Output:** Storybook is now configured to work with Rsbuild.

### 5. Add Custom Components and Stories

Create components in `src/components/` and their corresponding stories in `src/stories/`.

**Output:** The project now includes example components like `WelcomeBox`, `Button`, `Header`, and `Page` with their stories.

## Running the Project

### Development Server

```bash
npm run dev
```

**Output:** Opens your browser to `http://localhost:3000` showing the React application.

### Storybook

```bash
npm run storybook
```

**Output:** Opens Storybook at `http://localhost:6006` where you can view and interact with individual components in isolation.

## Building for Production

### Build the App

```bash
npm run build
```

**Output:** Creates a `dist/` directory with optimized production files.

### Preview Production Build

```bash
npm run preview
```

**Output:** Serves the production build locally for testing.

### Build Storybook

```bash
npm run build-storybook
```

**Output:** Creates a `storybook-static/` directory with the static Storybook site.

## Project Structure

```
react29-storybook-demo14/
├── .storybook/          # Storybook configuration
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── stories/         # Storybook stories and assets
│   ├── App.tsx          # Main app component
│   └── index.tsx        # App entry point
├── package.json
├── rsbuild.config.ts    # Rsbuild configuration
└── tsconfig.json        # TypeScript configuration
```

## Key Features Demonstrated

- **Fast Development**: Rsbuild provides quick build times and hot reloading
- **Component Isolation**: Storybook allows developing components independently
- **TypeScript Support**: Full type checking for better code quality
- **Accessibility Testing**: A11y addon helps ensure components are accessible
- **Documentation**: Auto-generated docs from component stories

## Next Steps

- Add more components and stories
- Configure additional Storybook addons
- Set up CI/CD for automated testing and deployment
- Integrate with design systems or component libraries