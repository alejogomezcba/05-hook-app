import React, {useState, useCallback, useEffect} from 'react';
import { ShowIncrement } from '../ShowIncrement/ShowIncrement';

import './style.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = useCallback ( (num) => {
      setCounter( c => c + num );
    }, [ setCounter ]
  );
  
  useEffect(() => {
    console.log('Log dentro del useEffect');
  }, [increment])
  

  return ( 
    <div>
      <h1>Use Callback Hook { counter } - increment by 5</h1>
      <hr />
      <ShowIncrement increment={increment}/>
    </div>
  )
};

