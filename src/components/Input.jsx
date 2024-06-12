import React from 'react';
import "../assets/style.css";

const Input = ({ value, onChange }) => {
  return (
    <div>
      <h2>Cycle Length</h2>
      <p>Enter the number of days in your menstrual cycle.</p>
      <input
        type='number'
        name="input-calculator"
        value={value}
        onChange={onChange}
        min="21"
        max="35"
        className=''
      />
    </div>
  );
}

export default Input;