import { SubmissionError, stopSubmit } from 'redux-form/immutable';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { REGISTER, LOGIN, REGISTER_SEND_MESSAGE } from '../constants/'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const submit = function submit(values, kind, dispatch, phone) {
    const username = values.get('username');
    const password = values.get('password');
    let body = {};

    console.log('username', username);
    console.log('password', password);

      if (kind === REGISTER_SEND_MESSAGE) {
          if (!username) {
            throw new SubmissionError({
              _error: '手机不能为空',
            });
          }

          if (!password) {
            throw new SubmissionError({
              _error: '验证码不能为空',
            });
          }

          // if register verify use phone and code
          body = {
            phone: username,
            code: password,
          }
      }

    //input fied submit validate
    
    console.log('kind', kind);
    if (kind === LOGIN) {

        if (!username || !password) {
          throw new SubmissionError({
            _error: '账号密码不能为空',
          });
        }

        if (!!username && username.length !== 11) {
        throw new SubmissionError({
          _error: '账号或密码错误，请重新输入',
          });
        }

        if (!!password && password.length < 6) {
        throw new SubmissionError({
          _error: '密码至少为6位字符'
        });
      } 

      body = {
        username,
        password,
      }
    }

    if (kind === REGISTER) {
      if (!username || !password) {
        throw new SubmissionError({
          _error: '密码不能为空'
        });
      }

      if ((!!password && password.length < 6) || (!!username && username.length < 6)) {
        throw new SubmissionError({
          _error: '密码至少为6位字符'
        });
      }

      if (password !== username) {
        throw new SubmissionError({
          _error: '两次密码不匹配',
        });
      }
      
      body = {
        username: phone,
        password,
      }

    }

      //dispatch Login or Register async actions
      // when kind === login, and then dispatch Login actions...
      dispatch({ type: kind, payload: { body } });

      //cancel submiss level errors, later I will delete this.
      // dispatch(stopSubmit(kind, {}));
}

export default submit;