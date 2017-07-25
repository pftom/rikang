import { delay } from 'redux-saga';
import { put, take, select, call, fork, cancel, cancelled } from 'redux-saga/effects';

//import LOGIN action constans
import { 
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,

  REGISTER_SEND_MESSAGE,
  REGISTER_SEND_MESSAGE_ERROR,
  REGISTER_SEND_MESSAGE_SUCCESS,

  REQUEST_SMS_CODE,
  REQUEST_SMS_CODE_SUCCESS,
  REQUEST_SMS_CODE_ERROR,

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
  CLEAR_STATE,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, usersApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';


//LOGIN async actions handle function
function* loginAuthorize(payload) {
  const { body } = payload;
  try {
    const { token } = yield call(request.post, base + usersApi.login, body);
    yield put({ type: LOGIN_SUCCESS, token });
    return token;
  } catch(error) {
    yield put({ type: LOGIN_ERROR, error });
  }
}

//register async actions handle function
function* registerAuthorize(payload) {
  try {
    const { body } = payload;
    yield call(request.post, base + usersApi.register, body);
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
    yield call(request.put, base + usersApi.changePassword, body, token);
    yield put({ type: CHANGE_PASSWORD_SUCCESS });
  } catch (error) {
    yield put({ type: CHANGE_PASSWORD_ERROR });
  }
}


//send message  async actions handle function
function* requestSmsCode(payload) {
  try {
    yield call(request.post, base + usersApi.requestSmsCode, payload);
    yield put({ type: REQUEST_SMS_CODE_SUCCESS, phone });
  } catch (error) {
    yield put({ type: REQUEST_SMS_CODE_ERROR });
  }
}

//send message  async actions handle function
function* verifySmsCode(payload) {
  try {
    const { body } = payload;
    yield call(request.post, base + usersApi.verifySmsCode, body);
    const { phone } = body;
    yield put({ type: REGISTER_SEND_MESSAGE_SUCCESS, phone });
  } catch (error) {
    yield put({ type: REGISTER_SEND_MESSAGE_ERROR });
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
    yield put({ type: CLEAR_STATE });
  }
}

function* watchRequestSmsCode() {
  while (true) {
    const { payload } = yield take(REQUEST_SMS_CODE);
    yield call(requestSmsCode, payload)
  }
}

function* watchVerifySmsCode() {
  while (true) {
    const { payload } = yield take(REGISTER_SEND_MESSAGE);
    yield call(verifySmsCode, payload)
  }
}



export {
  loginFlow,
  registerFlow,
  changePasswordFlow,
  watchRequestSmsCode,
  watchVerifySmsCode,
  clearFlow,
}