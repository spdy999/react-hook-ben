import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';

const App = () => {
  const [count, setCount] = useState(0);

  // if count or setCount (dependencies) are changed useCallback() will recreate itself
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);
  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
};

export default App;
