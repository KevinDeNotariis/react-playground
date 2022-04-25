import { Validation, ValidationResult } from '../types';

const validate = (toValidate: string, validation: Validation): ValidationResult => {
  const { minChar, maxChar, type } = validation;

  const result: ValidationResult = {
    valid: true,
    errors: [],
  };

  switch (type) {
    case 'number':
      if (!Number.isInteger(Number(toValidate))) {
        result.valid = false;
        result.errors.push('Input field is not a number');
      }
      break;
    case 'string':
      break;
    default:
      console.log('unkown input type');
  }

  if (minChar && toValidate.length < minChar) {
    result.valid = false;
    result.errors.push('Input field is too short');
  }

  if (maxChar && toValidate.length > maxChar) {
    result.valid = false;
    result.errors.push('Input field is too long');
  }

  if (validation.mustMatch) {
    if (!toValidate.match(validation.mustMatch)) {
      result.valid = false;
      result.errors.push(`Input field is not of the correct format`);
    }
  }

  if (validation.mustContain) {
    validation.mustContain.forEach((mustContain) => {
      if ([...toValidate.matchAll(mustContain.chars)].length < mustContain.atLeast) {
        result.valid = false;
        result.errors.push(
          `Input field must contain at least ${mustContain.atLeast} character${
            mustContain.atLeast > 1 ? 's' : ''
          } from ${String(mustContain.chars).split('[')[1].split(']')[0]}`
        );
      }
    });
  }

  if (validation.mustNotContain) {
    validation.mustNotContain.forEach((regExp) => {
      if ([...toValidate.matchAll(regExp)].length > 0) {
        result.valid = false;
        result.errors.push(
          `Input field must not contain any of the characters: ${
            String(regExp).split('[')[1].split(']')[0]
          }`
        );
      }
    });
  }

  return result;
};

export default validate;
