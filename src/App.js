import React, { useState } from 'react';
import './App.css';
import { useForm } from './useForm';
import { Hello } from './Hello';

const App = () => {
  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  const [showHello, setShowHello] = useState(true);
  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input name="email" value={values.email} onChange={handleChange} />
        <input name="firstName" value={values.firstName} onChange={handleChange} placeholder="firstName" />
        <input type="password" name="password" value={values.password} onChange={handleChange} />
      </>
    </div>
  );
};

export default App;
