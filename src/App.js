import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';

const App = () => {
  const [count, setCount] = useState(0);

  // if count or setCount (dependencies) are changed useCallback() will recreate itself
  const increment = useCallback(
    n => {
      setCount(c => c + n);
    },
    [setCount],
  );
  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
};

export default App;
