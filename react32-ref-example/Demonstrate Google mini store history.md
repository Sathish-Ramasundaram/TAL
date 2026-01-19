
---

# 📘 Google Mini Store History (React + TypeScript)

## 📖 Project Objective
This project demonstrates the difference between **`useState`** and **`useRef`** in React using a **Google Search analogy**:

- **Typing a query and hitting Search** → shows the latest search result on screen → **`useState`**  
- **The query itself is stored in memory (history)** → kept across renders without re-rendering → **`useRef`**  
- **Clicking History** → pulls all previous queries from memory (`useRef`) and updates the UI with **`useState`**  

This analogy helps beginners understand how `useState` triggers re-renders while `useRef` stores values silently in the background.

---

## 🖥️ Output
When you run the app:

1. Type a word in the input box.  
2. Click **Enter** →  
   - The word is stored in memory (`useRef`).  
   - The latest word is displayed using `useState`.  
3. Click **Show All Typed Words - History** →  
   - All stored words are pulled from `useRef`.  
   - The UI updates with `useState` to display the full history.  

---


---

## ⚙️ Code Explanation
```tsx
const typedWords = useRef<string[]>([]); 
// Stores all typed words in memory (no re-render)

const [latestWord, setLatestWord] = useState<string>(""); 
// Tracks and displays the latest word typed

const [displayWords, setDisplayWords] = useState<string[]>([]); 
// Tracks and displays all words when "Show All" is clicked
```

- **`useRef`** → Keeps a mutable array of words (`typedWords.current`) across renders.  
- **`useState`** → Updates the UI whenever the latest word or history needs to be shown.  
- **Analogy**:  
  - `useRef` = Google’s hidden search history memory.  
  - `useState` = The visible search results on screen.  

---


## ✅ Key Takeaways
- **`useState`** → UI state, triggers re-render when updated.  
- **`useRef`** → Persistent memory, does not trigger re-render.  
- Together, they simulate how Google Search shows the latest result while keeping a hidden query history.  

---
