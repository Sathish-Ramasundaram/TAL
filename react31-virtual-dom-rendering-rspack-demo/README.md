# React 31 Virtual DOM Rspack Demo

A demonstration project showcasing React 31's virtual DOM capabilities using Rspack as the build tool instead of the traditional Create React App setup.

## Project Overview

This project was originally bootstrapped with Create React App but has been modified to use [Rspack](https://rspack.dev/) - a fast Rust-based bundler - for improved build performance. It demonstrates React 31 features with TypeScript support.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration Changes Made

### Rspack Configuration (`rspack.config.js`)

The project uses a custom Rspack configuration instead of Create React App's webpack setup:

```javascript
const path = require("path");
const { HtmlRspackPlugin } = require("@rspack/core");

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "builtin:swc-loader",
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
          },
        },
      },
      // TODO: Add CSS and asset loaders
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3001, // Changed from 3000 to avoid conflicts
    hot: true,
  },
};
```

**Key Changes:**
- **Port**: Changed from 3000 to 3001 to avoid port conflicts
- **Bundler**: Replaced Create React App's webpack with Rspack
- **TypeScript**: Uses SWC loader for fast TypeScript compilation
- **HTML Plugin**: Uses HtmlRspackPlugin to generate HTML from template

### Package.json Modifications

The `scripts` section was updated to use Rspack commands:

```json
{
  "scripts": {
    "start": "rspack serve",
    "build": "rspack build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

## Available Scripts

### Development Server
```bash
npm start
```
- Starts the development server on `http://localhost:3001`
- Enables hot module replacement
- Uses Rspack's fast incremental builds

### Production Build
```bash
npm run build
```
- Creates optimized production build in `dist/` folder
- Minifies and bundles all assets

### Testing
```bash
npm test
```
- Runs tests using Create React App's test runner
- Supports interactive watch mode

## Current Issues & Fixes Needed

### 1. CSS and Asset Loading
**Problem**: CSS and SVG files are not being processed, causing module parse errors.

**Solution**: Add the following loaders to `rspack.config.js` and install dependencies:

```bash
npm install --save-dev style-loader css-loader
```

Then uncomment the CSS and asset rules in the module configuration.

### 2. Port Conflicts
**Problem**: Port 3000 was already in use.

**Solution**: Changed devServer port to 3001 in `rspack.config.js`.

## Dependencies

### Runtime Dependencies
- `react`: ^19.2.3
- `react-dom`: ^19.2.3
- `web-vitals`: ^2.1.4

### Development Dependencies
- `@rspack/cli`: ^1.7.2
- `@rspack/core`: ^1.7.2
- `@types/react`: ^19.2.8
- `@types/react-dom`: ^19.2.3
- `typescript`: ^4.9.5
- Testing libraries (@testing-library/*)

## Project Structure

```
react31-virtual-dom-rspack-demo/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── rspack.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Troubleshooting

### Port Already in Use
If you see `EADDRINUSE` error:
1. Change the port in `rspack.config.js` devServer configuration
2. Or kill the process using the port:
   ```bash
   # On Windows
   netstat -ano | findstr :3001
   taskkill /PID <PID> /F
   ```

### Module Parse Errors
If CSS or asset files fail to load:
1. Install missing loaders: `npm install --save-dev style-loader css-loader`
2. Add the loader rules to `rspack.config.js` as shown above

## Migration from Create React App

This project demonstrates how to migrate from Create React App to Rspack:

1. **Install Rspack**: Add `@rspack/cli` and `@rspack/core` as dev dependencies
2. **Create Config**: Add `rspack.config.js` with appropriate loaders and plugins
3. **Update Scripts**: Change `package.json` scripts to use `rspack serve` and `rspack build`
4. **Add Loaders**: Configure loaders for TypeScript, CSS, and assets
5. **Update Port**: Choose an available port for development

## Learn More

- [React Documentation](https://reactjs.org/)
- [Rspack Documentation](https://rspack.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
