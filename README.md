# TAL — React Learning Demos

A comprehensive collection of React learning demos covering fundamentals, patterns, and advanced concepts. Each project demonstrates a specific React feature or concept with working code examples.

## 📚 Projects by Topic

### Fundamentals

- **normal-dom-demo**: Plain HTML + JavaScript DOM manipulation
- **react01-components-demo**: React components with create-react-app
- **react02-jsx-demo**: JSX syntax and usage
- **react03-virtual-dom-demo**: React's virtual DOM concepts
- **react04-props-state-demo**: Props and state fundamentals

## Newly added 12-January

- **react06-function-class-components-demo**: Comparison of functional vs class components in React

- **react07-props-state-demo**: Extended props & state examples with multiple components

- **react08-props-passing-data-bw-components-demo**: Passing data between parent and child components via props

- **react09-manage-state-demo**: Managing and updating state in React applications

- **react10-use-effect0hooks-demo**: Basic usage of `useEffect` hook for side effects

- **react10-use-effect1-demo**: Advanced `useEffect` scenarios

- **react11-synthetic-event-demo**: Demonstrates React’s Synthetic Event system

- **react12-event-handler-demo**: Handling user interactions with event handlers

- **react13-event-bubbling-capturing-rspackdemo**: Event bubbling and capturing demonstration (Rspack setup)

- **react14-preventdefault-rspack**: Using `preventDefault` to stop default event behavior (Rspack setup)

- **react15-controlled-uncontrolled-rspack**: Controlled vs uncontrolled components in forms (Rspack setup)

### Forms & Routing

- **react16-1-HTML-and-JS-form-demo**: Basic form handling
- **react16-forms-demo**: React form handling
- **react17-form-handling**: Advanced form patterns
- **react18-form-validation**: Form validation implementation
- **react19-router-demo**: React Router basics
- **react20-dynamic-routes**: Dynamic routing patterns
- **react20-dynamic-routes-realworld**: Real-world routing examples
- **react21-protected-routes**: Authentication-based route protection

### Debugging & Error Handling

- **react22-devtools-demo**: React DevTools usage
- **react23-1-runtime-error-HTML-JavaScript**: Runtime error handling
- **react23-error-debugging**: Debugging React applications
- **react24-error-boundary**: Error boundary implementation
- **react24-error-boundary-real-world**: Real-world error boundary patterns

### APIs & Data Fetching

- **react25-rest-api**: Consuming REST APIs

### GraphQL & Advanced Rendering

- **react26-1-HTML-JS-GraphQL**: GraphQL basics with HTML and JavaScript
- **react26-2-graphql-vite-demo5**: GraphQL with Apollo Client and Vite
- **react26-graphql-demo3**: GraphQL with Apollo Client, TypeScript, and Rspack
- **react31-virtual-dom-rendering-rspack-demo**: Virtual DOM rendering
- **react31-reactmemo-rendering-rspack-demo**: React.memo performance optimization

### Testing & Component Development

- **react27-unit-testing-demo2**: Unit testing React components
- **react27-unit-test-demo3**: Advanced unit testing with Jest and Testing Library
- **react29-storybook-demo2**: Storybook with Rsbuild
- **react29-storybook-vite-demo**: Storybook with Vite
- **react30-chromatic-intro**: Visual testing with Chromatic

## Newly added 19-January

- **react08-props-demo2**: Additional examples demonstrating props usage and component reusability

- **react09-state-demo**: Focused demonstrations on managing and updating state in React components

- **react32-context-demo**: Demonstrates React Context API for sharing data across components and avoiding props drilling

- **react32-ref-demo**: Introduction to useRef and how refs store mutable values without causing re-renders

- **react32-ref-example**: Practical examples showing real-world use cases of refs (Mini Google search and no re-render)

- **react33-hoc-demo3**: Demonstrates Higher-Order Components (HOCs) and how they are used to wrap components with additional behavior

## Newly added 20-January

- **react34-render-props**: Introduces the Render Props pattern by first explaining the core concept using simple JavaScript callback examples, then mapping the same idea to React.

- **react34-render-props-demo**: Demonstrates a practical React implementation of the Render Props pattern

---

- **react35-csr-demo**: Demonstrates **Client-Side Rendering (CSR)** in React, showing how the UI is rendered in the browser after JavaScript loads, and how initial HTML is minimal when viewed via “View Page Source”.

- **react35-ssr-demo**: Demonstrates **Server-Side Rendering (SSR)** using React, showing how the server generates complete HTML before sending it to the browser, enabling faster first paint and better SEO visibility.

---

- **react36-accessibility-demo**: Demonstrates Accessibility (a11y) best practices in React, focusing on semantic HTML, proper labeling, keyboard navigation, and ARIA attributes to build inclusive and user-friendly interfaces for all users, including those using assistive technologies.

- **react27-unit-test-demo3**: Advanced unit testing demonstration for React components using Jest and Testing Library

- **react30-chromatic-intro**: Introduction to Chromatic for visual testing and UI change detection with Storybook

### Redux-Saga & State Management

- **react37-saga01-intro**: Redux-Saga beginner introduction
- **react37-saga02**: Redux-Saga basics and core concepts
- **react37-saga03**: Search feature using Redux-Saga with `takeLatest`
- **react37-saga04**: Error handling with Redux-Saga
- **react37-saga-intro**: Redux-Saga for handling side effects in React
- **react37-saga-api**: Redux-Saga fetching data from APIs and updating UI
- **react38-saga-demo3**: Advanced Redux-Saga patterns and examples
- **react41-takeevery-latest**: Comparison of `takeEvery` vs `takeLatest` for handling concurrent actions

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed

### Creating a New React Project

```bash
npx create-react-app project-name --template typescript
```

- `npx` is a tool that comes bundled with **npm (Node Package Manager)**.
- It allows you to **run commands from npm packages without installing them globally**.
- Example:
  - If you type `npx create-react-app project-name`, it will temporarily download and run the `create-react-app` package to generate your project.
  - You don’t need to install `create-react-app` permanently on your computer — `npx` handles it for you.

👉 Think of `npx` as a “one‑time runner” for npm packages.

---

### 🔹 What does `--template typescript` mean?

- By default, `create-react-app` sets up a project using **JavaScript**.
- Adding `--template typescript` tells it to scaffold the project with **TypeScript support**:
  - It configures the project to use `.tsx` and `.ts` files.
  - It installs TypeScript and React type definitions (`@types/react`, `@types/react-dom`).
  - It sets up a `tsconfig.json` file automatically.

It means the project will use **TypeScript instead of plain JavaScript**.

---
