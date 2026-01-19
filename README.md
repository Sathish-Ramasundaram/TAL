# TAL — Learning Demos

This repository collects several small demos on how the DOM and React work.

**Projects included**
- **normal-dom-demo**: Plain HTML + JavaScript demonstration of real 

- **react01-components-demo**: Small React app (create-react-app scripts) demonstrating components 

- **react02-jsx-demo**: JSX-focused React examples using `react-scripts` 

- **react03-virtual-dom-demo**: Demonstrates React's virtual DOM concepts (uses `react-scripts`) 

- **react04-props-state-demo**: Examples of props & state; uses `rspack` for development 

## Newly added 12-January

- **react05-lifecycle-demo**: Demonstrates React lifecycle methods 

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

## Newly added 13-January

- **react16-1-HTML-and-JS-form-demo**: Basic HTML and JavaScript form handling demonstration  

- **react16-forms-demo**: React form handling with Rspack setup  

- **react17-form-handling**: Advanced form handling patterns and techniques in React  

- **react18-form-validation**: Form validation implementation in React applications  

- **react19-router-demo**: Introduction to React Router for client-side routing  

- **react20-dynamic-routes**: Dynamic routing based on data and parameters  

- **react20-dynamic-routes-realworld**: Real-world example of dynamic routing patterns  

- **react21-protected-routes**: Implementing authentication-based protected routes  

- **react22-devtools-demo**: Using React DevTools for debugging and performance analysis  

- **react23-1-runtime-error-HTML-JavaScript**: HTML and JavaScript runtime error handling  

- **react23-error-debugging**: Debugging errors in React applications  

- **react24-error-boundary**: Error boundary implementation for error handling  

- **react24-error-boundary-real-world**: Real-world error boundary patterns  

- **react25-rest-api**: Consuming REST APIs in React applications  

## Newly added 15-January

- **react26-1-HTML-JS-GraphQL**: GraphQL demonstration using HTML, JS.

- **react26-2-graphql-vite-demo5**: GraphQL React Demo with Apollo Client using Vite

- **react26-graphql-demo3**: GraphQL demo with Apollo Client, TypeScript, and Rspack

- **react31-virtual-dom-rendering-rspack-demo**: Virtual DOM rendering demonstration with Rspack

- **react31-reactmemo-rendering-rspack-demo**: React.memo optimization for component re-renders with Rspack

## Newly added 16-January

- **react27-unit-testing-demo2**: Unit testing demonstration for React components

- **react29-storybook-demo14**: React 29 Storybook Demo with Rsbuild for component development

- **react29-storybook-vite-demo**: React Storybook Vite Demo with visual testing and Chromatic

## Newly added 19-January

- **react08-props-demo2**: Additional examples demonstrating props usage and component reusability

- **react09-state-demo**: Focused demonstrations on managing and updating state in React components

- **react32-context-demo**: Demonstrates React Context API for sharing data across components and avoiding props drilling

- **react32-ref-demo**: Introduction to useRef and how refs store mutable values without causing re-renders

- **react32-ref-example**: Practical examples showing real-world use cases of refs (Mini Google search and no re-render)

- **react33-hoc-demo**: Demonstrates Higher-Order Components (HOCs) and how they are used to wrap components with additional behavior


**Quick start (per demo)**

**Prerequisites**
- Node.js and npm installed (Node 16+ recommended).

npx create-react-app project-name --template typscript

### 🔹 What does `npx` mean?
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