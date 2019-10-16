import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{loading ? 'loading' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="firstName" />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </>
    </div>
  );
};

export default App;
