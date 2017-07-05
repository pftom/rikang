import { SubmissionError } from 'redux-form';
import { Alert } from 'react-native';
// import 'isomorphic-fetch';


const submit = async function submit(values) {
  try {
    console.log(JSON.stringify({
      username: values.get('username'),
      password: values.get('password')
    }));
    const response = await fetch('http://106.14.146.36/users/login/', {
      method: 'POST',
      body: JSON.stringify({
        username: values.get('username'),
        password: values.get('password')
      })
    });
    console.log(response);
  } catch (e) {
    console.log(e);
    throw new SubmissionError({ _error: '账号或密码错误' });
  }
}

export default submit;