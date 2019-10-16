import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(5);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
    </div>
  );
};

export default App;
