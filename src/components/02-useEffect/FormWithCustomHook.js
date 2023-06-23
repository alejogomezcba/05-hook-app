import React from "react";
import { useForm } from "../../hooks/useForm";

import { bricks } from "../../bricks";

const {
  components: {
    CustomForm: {
      formValuesBrick,
      formInputsBrick,
    },
  },
} = bricks;

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm(formValuesBrick);

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={hadleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        {formInputsBrick.map((input) => (
          <input
            type={input.type}
            name={input.name}
            className="form-control"
            placeholder={input.placeholder}
            autoComplete={input.autoComplete}
            value={formValues[input.name]}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
