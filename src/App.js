import React, { useState, useCallback } from 'react';
import { Hello } from './Hello';
import { Square } from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const favouriteNum = [7, 21, 37];

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
      {favouriteNum.map((n, ind) => {
        return <Square key={ind} onClick={() => increment(n)} n={n} />;
      })}
    </div>
  );
};

export default App;
