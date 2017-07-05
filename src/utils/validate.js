const required = value => value ? undefined : 'Required';

const maxLength = max => value =>
  value && value.length > max ? `密码长度最多为${max}` : undefined;
const maxLength15 = maxLength(15);

const number = value => value && isNaN(Number(value)) ? '必须是11位数字' : undefined;

const minLength = min => value =>
  value && value.length < min ? `密码长度至少为${min}` : undefined;
const minLength5 = minLength(5);

const validate = values => {
  const errors = {}
  if (!values.get('username')) {
    errors.username = 'Required';
  }

  if (!values.get('password')) {
    errors.password = 'Required';
  }

  return errors;
}


export {
  required,
  maxLength15,
  minLength5,
  number,
  validate,
}