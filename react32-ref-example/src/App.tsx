import React, { useState, useRef } from "react";

function App() {
  // Ref to store all typed words (memory)
  const typedWords = useRef<string[]>([]);

  console.log("Component rendered");

  // State to display words on screen
  const [displayWords, setDisplayWords] = useState<string[]>([]);

  // Ref for input field
  const inputRef = useRef<HTMLInputElement>(null);

  // Add word to memory when Enter button clicked
  const handleEnter = () => {
  const word = inputRef.current?.value.trim();
  if (word) {
    typedWords.current.push(word); // store in memory

    // Clear input safely
    if (inputRef.current) inputRef.current.value = "";
  }
};


  // Show all typed words on screen
  const handleShowAll = () => {
    setDisplayWords([...typedWords.current]); // update UI
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Show All Words Typed</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type a word"
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={handleEnter} style={{ marginRight: "5px" }}>
        Enter
      </button>
      <button onClick={handleShowAll}>Show All Words Typed</button>

  
      {displayWords.length === 0 ? (
        <p>Click show all words typed button after typing words</p>
      ) : (
        <ul>
          {displayWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
