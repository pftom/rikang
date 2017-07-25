const required = value => value ? undefined : 'Required';

const maxLength = max => value =>
  value && value.length > max ? `密码长度最多为${max}` : undefined;
const maxLength15 = maxLength(15);

const number = value => value && value.length !== 11 && isNaN(Number(value)) ? true : undefined;

const minLength = min => value =>
  value && value.length < min ? `密码长度至少为${min}` : undefined;
const minLength5 = minLength(5);

const phoneNumber = value =>
  value && !/^([0-9]{11})$/i.test(value)
    ? true
    : undefined



const validate = values => {
  const errors = {}
  if (values.get('username') !== values.get('password')) {
    errors.username = '两次密码不匹配';
  }
  return errors;
}


export {
  required,
  maxLength15,
  minLength5,
  number,
  validate,
  phoneNumber,
}