import { SubmissionError } from 'redux-form';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';


const submit = function submit(values) {
  try {
    console.log(values);
  } catch (e) {
    console.log(e);
    throw new SubmissionError({ _error: '账号或密码错误' });
  }
  console.log('Navigation', NavigationActions);

  NavigationActions.navigate({
      routeName: 'Login',
  });
}

export default submit;