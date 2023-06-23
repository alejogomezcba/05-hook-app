import {useState} from "react";

export const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);

  const handleInputChange = ({ target }) => {
    const targetName = target.name;
    const targetValue = target.value;
    setValues({ ...values, [targetName]: targetValue });
  };

  return [values, handleInputChange];

};
