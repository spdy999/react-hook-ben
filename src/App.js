import React, { useState, useRef } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);

  return (
    <div>
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
