import React, {useRef} from 'react';

import './style.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  }

  return (
    <div>
      <p>Focus Screen</p>
      <hr />

      <input
       ref={inputRef}
       className='form-control'
       placeholder='Su nombre'
      />

      <button
      className='btn btn-outline-primary mt-3'
      onClick={handleClick}>
        Focus
      </button>
    </div>
  )
};




