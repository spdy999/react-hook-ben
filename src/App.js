import React, { useState } from 'react';
import { useFetch } from './useFetch';
import { computeLongestWord } from './utils';

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch('https://jsonplaceholder.typicode.com/posts/');

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{computeLongestWord(data)}</div>
    </div>
  );
};

export default App;
