import React, { useState, useEffect } from 'react';

import Message from './Message';

import { bricks } from '../../bricks';

const { components: { CustomForm: { formValuesBrick, formInputsBrick } } } = bricks;

const SimpleForm = () => {

    const [formState, setFormState] = useState(formValuesBrick);

    useEffect(() => {
        console.log(formState);
    }, [formState]);


    const handleInputChange = ({target}) => {
        const inputName = target.name;
        const value = target.value;
        setFormState({ ...formState, [ inputName ]: value });
    }
    
    
  return (
    <>
      <h1>SimpleForm con useEffec</h1>
      <hr />

      <div className='form-group'>

        { formInputsBrick && formInputsBrick.map( input => (
          <input
            type={input.type}
            name={input.name}
            autoComplete={input.autoComplete}
            placeholder={input.placeholder}
            value={formState[input.name]}
            onChange={handleInputChange}
            className='form-control'
          />
        )) }

      </div>

    </>
  )
}

export default SimpleForm
