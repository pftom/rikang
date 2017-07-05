import { SubmissionError } from 'redux-form';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';


const submit = function submit(values) {
  try {
    console.log('values', values.get('username'));
  } catch (e) {
    throw new SubmissionError({ _error: '账号或密码错误' });
  }
}

export default submit;