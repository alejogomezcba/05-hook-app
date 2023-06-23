import React, {useState} from 'react';
import {useCounterBtn} from '../../../hooks/useCounterBtn';
import {Small} from './Small';

import './style.css';

export const Memorize = () => {

  const { counter, increment, decrement, resetValue } = useCounterBtn(0);
  const [show, setShow] = useState();


  return ( 
    <div>
      <h1>Counter: <Small value={counter}/> </h1>
      <hr />

      <button className='btn btn-primary' onClick={decrement}>-1</button>
      <button className='btn btn-primary' onClick={resetValue}>Reset</button>
      <button className='btn btn-primary' onClick={increment}>+1</button>
      <br />
      <br />
      <button className='btn btn-outline-primary' onClick={() => setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
    </div>
  )
};

