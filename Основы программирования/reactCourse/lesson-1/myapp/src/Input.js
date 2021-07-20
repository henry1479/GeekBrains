import './App.css';
import { useState } from 'react';

function Input(props) {
  const[value, setValue] = useState('');

  const handleChange = (event) => {
      setValue(event.target.value);
  }
  return (
    <div>
        <input type="text" value={value} onChange={handleChange} />
        <span>{value}</span>
    </div>
  )
}



export default Input;


