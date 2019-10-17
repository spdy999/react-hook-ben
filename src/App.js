import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
import { useForm } from './useForm';
import { useFetch } from './useFetch';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? 'loading' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggles</button>
        {showHello && <Hello />}
        <input name="email" ref={inputRef} value={values.email} onChange={handleChange} />
        <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="firstName" />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
        <button
          onClick={() => {
            console.log(inputRef);
            inputRef.current.focus();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;
