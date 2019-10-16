import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  // const [showHello, setShowHello] = useState(true);

  // useEffect(() => {
  //   console.log('je;;p');
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };
  //   window.addEventListener('mousemove', onMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    console.log('mount1');
  }, []);
  useEffect(() => {
    console.log('mount2');
  }, []);
  return (
    <div>
      <>
        {/* <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />} */}
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="firstName" />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </>
    </div>
  );
};

export default App;
