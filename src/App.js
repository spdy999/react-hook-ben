import React, { useState, useRef } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  const inputRef = useRef();
  const hello = useRef(() => console.log('hello  '));

  const [showHello, setShowHello] = useState(true);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect());
  //   // return () => {
  //   //   cleanup;
  //   // };
  // }, []);

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
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;
