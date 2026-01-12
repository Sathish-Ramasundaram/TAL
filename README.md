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

**Quick start (per demo)**

**Prerequisites**
- Node.js and npm installed (Node 16+ recommended).

npx create-react-app project-name --template typscript

### 🔹 What does `npx` mean?
- `npx` is a tool that comes bundled with **npm (Node Package Manager)**.  
- It allows you to **run commands from npm packages without installing them globally**.  
- Example:  
  - If you type `npx create-react-app lifecycle-demo`, it will temporarily download and run the `create-react-app` package to generate your project.  
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
### ✅ Beginner takeaway
- `npx` → runs npm packages without global install.  
- `create-react-app lifecycle-demo` → creates a new React project named `lifecycle-demo`.  
- `--template typescript` → sets up the project with TypeScript support.  
---
