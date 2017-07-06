import { delay } from 'redux-saga';
import { put, take, select, call, fork, cancel, cancelled } from 'redux-saga/effects';

//import LOGIN action constans
import { LOGIN, REGISTER, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, CLEAR_TOKEN, SET_TOKEN } from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, usersApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';


function* authorize(payload) {
  console.log('base', base + usersApi.login);
  try {
    const { token } = yield call(request.post, base + usersApi.login, payload);
    console.log('token', token);
    yield put({ type: LOGIN_SUCCESS });
    yield put({ type: SET_TOKEN, payload: token });
    return token;
  } catch(error) {
    yield put({ type: LOGIN_ERROR });
  }
}

function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN);
    // fork return a Task object for cancel later
    const task = yield fork(authorize, payload);
    const action = yield take([LOGOUT, LOGIN_ERROR]);

    if (action.type === LOGOUT) {
      yield cancel(task);
    }
    yield put({ type: CLEAR_TOKEN });
  }
}

export default loginFlow;