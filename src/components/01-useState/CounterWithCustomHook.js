import React from 'react';


import { bricks } from '../../bricks';
import { useCounter } from '../../hooks/useCounter';


import "./style.css";

const { components: { CounterAppBrick: { CounterBtns } } } = bricks;
const mathValue = 2;

const CounterWithCustomHook = () => {
    
    const { state, increment, decrement, resetValue } = useCounter(100);
    
    const handleButton = (e, mathValue) => {
        const button = e.target.innerHTML;
        if (button === "Reset") resetValue();
        if (button === "+") increment(mathValue);
        if (button === "-") decrement(mathValue);
    };
  
  return (
    <>
      <span>buttons will increase or decrease by {mathValue} </span>
      <h3> Counter With Hook: {state} </h3>
      <br></br>
      {CounterBtns.map(e => <button onClick={(e) => handleButton(e, mathValue)} className="btn btn-primary">{e}</button>
            )}
    </>
  )
}

export default CounterWithCustomHook
