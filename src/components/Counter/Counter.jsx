import React, { useState } from 'react';
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  
  return (
    
    <>
      <div className="counter-container">
        <p className="count">Asistencia: {count}</p>
        <button className="counter-btn increment" onClick={handleIncrement}>SUMAR</button>
        <button className="counter-btn decrement" onClick={handleDecrement}>RESTAR</button>
    </div>
    </>
  )
}
