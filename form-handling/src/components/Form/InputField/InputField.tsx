import { useState, useEffect } from 'react';
import { Validation } from '../types';
import { validate } from '../helpers';

interface InputFieldProps {
  placeholder: string;
  id: string;
  validation: Validation;
  type?: string;
  isValid: Function;
}

const InputField = ({ placeholder, id, validation, type = 'text', isValid }: InputFieldProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const validationRes = validate(value, validation);
    console.log(validationRes);

    isValid(validationRes.valid);
  }, [value]);

  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      onChange={(event) => setValue(() => event.target.value)}
    />
  );
};

export default InputField;
