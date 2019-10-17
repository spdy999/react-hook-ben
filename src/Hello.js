import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { useFetch } from './useFetch';

export const Hello = () => {
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    if (count) {
      localStorage.setItem('count', JSON.stringify(count));
    } else {
      localStorage.setItem('count', Math.floor(Math.random() * 100));
    }
  }, [count]);

  const [rect, setRect] = useState({});

  const divRef = useRef();
  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{!data ? 'loading' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  );
};
