import React from 'react';
import './App.css';

function App() {

  const [count, setCount] = React.useState(1);

  console.log('App rendered');

  return (
    <>
    <h1>{count}
    </h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    </>
    
  );
}

export default App;
