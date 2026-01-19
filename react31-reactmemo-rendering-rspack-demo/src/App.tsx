import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

// Wrap App in React.memo
const App = React.memo(() => {

    // Log with timestamp
  console.log(`App rendered at: ${new Date().toLocaleTimeString()}`);

  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Counter count={count} setCount={setCount} />
      <Footer />
    </div>
  );
});

export default App;
