import { delay } from 'redux-saga';
import { put, take, select, call, fork, cancel, cancelled } from 'redux-saga/effects';

//import LOGIN action constans
import { 
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,

  LOGIN,  
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 

  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,

  LOGOUT, 

  CLEAR_TOKEN, 
  SET_TOKEN,

  CLEAR,
  CLEAR_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, usersApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';


//LOGIN async actions handle function
function* loginAuthorize(payload) {
  console.log('base', base + usersApi.login);
  try {
    const { token } = yield call(request.post, base + usersApi.login, payload);
    yield put({ type: LOGIN_SUCCESS, token });
    return token;
  } catch(error) {
    yield put({ type: LOGIN_ERROR });
  }
}

//register async actions handle function
function* registerAuthorize(payload) {
  try {
    yield call(request.post, base + usersApi.register, payload);
    yield put({ type: REGISTER_SUCCESS });
    yield put({ type: LOGIN, payload });
  } catch (error) {
    yield put({ type: REGISTER_ERROR });
  }
}

//change password async actions handle function
function* changePassword(payload) {
  try {
    const { body, token } = payload;
    yield call(request.put, base + usersApi.changePassword, token, body);
    yield put({ type: CHANGE_PASSWORD_SUCCESS });
  } catch (error) {
    yield put({ type: CHANGE_PASSWORD_ERROR });
  }
}

//LOGIN async actions watch function
function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN);
    // fork return a Task object for cancel later
    const task = yield fork(loginAuthorize, payload);
    const action = yield take([LOGOUT, LOGIN_ERROR]);

    if (action.type === LOGOUT) {
      yield cancel(task);
    }
    yield put({ type: CLEAR_TOKEN });
  }
}

//watch register action for handle
function* registerFlow() {
  while (true) {
    const { payload } = yield take(REGISTER);
    yield call(registerAuthorize, payload);
  }
}

//watch change-password action for handle
function* changePasswordFlow() {
  while (true) {
    const { payload } = yield take(CHANGE_PASSWORD);
    yield call(changePassword, payload)
  }
}


function* clearFlow() {
  while(true) {
    yield take(CLEAR);
    yield delay(1000);
    yield put({ type: CLEAR_ERROR });
  }
}



export {
  loginFlow,
  registerFlow,
  changePasswordFlow,
  clearFlow,
}