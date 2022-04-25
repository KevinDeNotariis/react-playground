/* eslint no-control-regex: "off" */

import { useState, useEffect } from 'react';

import InputField from './InputField';
import Button from './Button';

import { Validation } from './types';

const emailValidation: Validation = {
  minChar: 6,
  maxChar: 35,
  type: 'string',
  mustMatch:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
};

const usernameValidation: Validation = {
  minChar: 12,
  maxChar: 35,
  type: 'string',
  mustContain: [
    {
      chars: /[._-]/g,
      atLeast: 1,
    },
  ],
  mustNotContain: [/[,;:|!<>?'^/()]/g],
};

const passwordValidation: Validation = {
  minChar: 12,
  maxChar: 35,
  type: 'string',
  mustContain: [
    {
      chars: /[,.;:|!<>?'^/()!"$%-]/g,
      atLeast: 2,
    },
  ],
};

const Form = () => {
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [valid, isValid] = useState(false);

  const inputFields = [
    {
      name: 'email',
      validation: emailValidation,
      type: 'text',
      isValid: setEmailValid,
      valid: emailValid,
    },
    {
      name: 'username',
      validation: usernameValidation,
      type: 'text',
      isValid: setUsernameValid,
      valid: usernameValid,
    },
    {
      name: 'password',
      validation: passwordValidation,
      type: 'password',
      isValid: setPasswordValid,
      valid: passwordValid,
    },
  ];

  useEffect(() => {
    console.log(
      inputFields.reduce(
        (acc: string, curr: any) => `${acc} ${curr.name} valid: ${curr.valid}\n`,
        ''
      )
    );
    if (emailValid && usernameValid && passwordValid) isValid(() => true);
  }, [emailValid, usernameValid, passwordValid]);

  return (
    <div>
      {inputFields.map((inputField) => (
        <InputField
          key={inputField.name}
          placeholder={inputField.name}
          id={inputField.name}
          validation={inputField.validation}
          type={inputField.type}
          isValid={inputField.isValid}
        />
      ))}
      <Button enabled={valid} />
    </div>
  );
};

export default Form;
