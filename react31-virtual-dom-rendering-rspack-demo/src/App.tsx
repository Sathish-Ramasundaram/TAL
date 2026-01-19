import React, { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  console.log(
    `App rendered at: ${new Date().toLocaleTimeString()}`
  );

  return (
    <div>
      <Header />
      <Counter count={count} setCount={setCount} />
      <Footer />
    </div>
  );
};

export default App;
