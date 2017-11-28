import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {}

  if(Validator.isEmpty(data.username ? data.username : '')) {
    errors.username = 'This field is required'
  }

  if(Validator.isEmpty(data.email ? data.email : '')) {
    errors.email = 'This field is required'
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if(Validator.isEmpty(data.password ? data.password : '')) {
    errors.password = 'This field is required'
  }

  if(Validator.isEmpty(data.passwordConfirmation ? data.passwordConfirmation : '')) {
    errors.passwordConfirmation = 'This field is required';
  }

  if(!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}