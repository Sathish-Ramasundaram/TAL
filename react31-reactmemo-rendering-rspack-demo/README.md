# React.memo with Rspack Demo

This project demonstrates the use of `React.memo` for optimizing React component re-renders in a TypeScript-based React application. It uses Rspack as the build tool instead of the default Create React App webpack setup.

## Features

- **React.memo Optimization**: All components (`App`, `Header`, `Counter`, `Footer`) are wrapped with `React.memo` to prevent unnecessary re-renders.
- **Console Logging**: Each component logs its render time to the console, allowing you to observe which components re-render when state changes.
- **TypeScript Support**: Fully typed with TypeScript for better development experience.
- **Fast Bundling**: Uses Rspack for faster build times compared to traditional webpack.

## Project Structure

```
src/
├── components/
│   ├── Counter.tsx    # Memoized counter component with increment button
│   ├── Footer.tsx     # Memoized footer component
│   └── Header.tsx     # Memoized header component
├── App.tsx            # Main app component, also memoized
└── ...                # Other standard React app files
```

## How It Works

When you click the "Increment" button in the Counter component:

1. The `count` state in `App` updates.
2. Only the `Counter` component re-renders because its `count` prop changed.
3. `Header` and `Footer` components do not re-render since their props remain the same.
4. Check the browser console to see the render logs and verify the optimization.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react31-reactmemo-rspack-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

This will start the Rspack dev server and open the app in your browser.

### Building for Production

Build the app for production:
```bash
npm run build
```

### Running Tests

Run the test suite:
```bash
npm test
```

## Technologies Used

- **React 19**: Latest version of React with concurrent features
- **TypeScript**: For type safety
- **Rspack**: Fast bundler as an alternative to webpack
- **React Testing Library**: For component testing

## Key Concepts Demonstrated

- **React.memo**: Memoization of functional components
- **Performance Optimization**: Preventing unnecessary re-renders
- **Component Props**: How prop changes trigger re-renders
- **Console Debugging**: Using console logs to track component renders

## Development Notes

This project was created using Create React App with TypeScript template, then modified to use Rspack instead of the default webpack configuration. The original CRA scripts were replaced with Rspack equivalents in `package.json`.

Original setup commands:
```bash
npx create-react-app react31-reactmemo-rspack-demo --template typescript
cd react31-reactmemo-rspack-demo
npm install -D @rspack/cli @rspack/core
```

Updated scripts in package.json:
```json
"start": "rspack serve --config rspack.config.js",
"build": "rspack build --config rspack.config.js"
```