# React Storybook Vite Demo

This project is a demonstration of building and showcasing React UI components using Vite as the build tool and Storybook for component development and testing. It includes visual regression testing with Chromatic and various testing utilities.

## What's in the Project

### Core Technologies
- **React 19**: Latest version of React for building user interfaces
- **Vite**: Fast build tool and development server
- **Storybook**: Tool for developing UI components in isolation
- **Chromatic**: Visual testing and review platform for Storybook

### Components
The project includes several reusable UI components:
- **Avatar**: User profile picture component
- **Badge**: Status indicator or label component
- **Button**: Interactive button component with various styles
- **Card**: Container component for content display
- **Input**: Form input field component

Each component comes with:
- Component implementation (`.jsx` files in `src/components/`)
- Storybook stories (`.stories.jsx` files) for interactive documentation
- Props validation using PropTypes

### Additional Features
- ESLint configuration for code quality
- Testing setup with Vitest and Playwright
- Accessibility testing with Storybook's a11y addon
- Documentation generation with Storybook Docs

## Why This Project is Helpful

1. **Component Development**: Learn how to build reusable React components
2. **Storybook Integration**: Understand how to create interactive component documentation
3. **Visual Testing**: Experience automated visual regression testing with Chromatic
4. **Modern Tooling**: Use cutting-edge tools like Vite and React 19
5. **Testing Practices**: Implement unit and integration tests for components
6. **Accessibility**: Ensure components are accessible with built-in a11y checks

This setup is ideal for:
- UI library development
- Design system creation
- Component-driven development workflows
- Learning modern React development practices

## How to Create This Project

Follow these step-by-step commands to recreate this project from scratch:

### 1. Create a new Vite React project
```bash
npm create vite@latest react29-storybook-vite-demo -- --template react
cd react29-storybook-vite-demo
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Storybook
```bash
npx storybook@latest init
```

### 4. Install additional dev dependencies for enhanced functionality
```bash
npm install --save-dev @chromatic-com/storybook @storybook/addon-a11y @storybook/addon-docs @storybook/addon-vitest prop-types eslint-plugin-storybook playwright @vitest/browser-playwright @vitest/coverage-v8
```

### 5. Update package.json scripts (if needed)
The scripts should already be configured by Storybook init. Verify they include:
- `"storybook": "storybook dev -p 6006"`
- `"build-storybook": "storybook build"`

### 6. Create component structure
```bash
mkdir -p src/components src/stories
```

### 7. Create UI components
Create the following files in `src/components/`:
- `Avatar.jsx`
- `Badge.jsx`
- `Button.jsx`
- `Card.jsx`
- `Input.jsx`

### 8. Create Storybook stories
Create corresponding story files in `src/stories/`:
- `Avatar.stories.jsx`
- `Badge.stories.jsx`
- `Button.stories.jsx`
- `Card.stories.jsx`
- `Input.stories.jsx`

### 9. Configure Chromatic (optional)
Create `chromatic.config.json` in the root:
```json
{
  "projectToken": "your-chromatic-project-token"
}
```

### 10. Start development
```bash
# Run the Vite dev server
npm run dev

# In another terminal, run Storybook
npm run storybook
```

### 11. Build for production
```bash
# Build the main app
npm run build

# Build Storybook
npm run build-storybook
```

## Running Tests

```bash
# Run ESLint
npm run lint

# Run Storybook tests (if configured)
npm run test-storybook
```

## Chromatic Deployment

To deploy Storybook to Chromatic for visual testing:

1. Sign up at [chromatic.com](https://chromatic.com)
2. Get your project token
3. Add it to `chromatic.config.json`
4. Run: `npx chromatic --project-token=<your-token>`

## Project Structure

```
react29-storybook-vite-demo/
├── public/
├── src/
│   ├── components/
│   │   ├── Avatar.jsx
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Input.jsx
│   ├── stories/
│   │   ├── Avatar.stories.jsx
│   │   ├── Badge.stories.jsx
│   │   ├── Button.stories.jsx
│   │   ├── Card.stories.jsx
│   │   └── Input.stories.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── chromatic.config.json
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

This project serves as a solid foundation for building component libraries and design systems with modern React tooling.
