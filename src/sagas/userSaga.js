import { delay } from 'redux-saga';
import { put, take, select, call, fork, cancel, cancelled } from 'redux-saga/effects';

//import LOGIN action constans
import { 
  LOGIN,  
  LOGOUT, 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  CLEAR_TOKEN, 
  SET_TOKEN,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
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
    yield put({ type: LOGIN_SUCCESS });
    yield put({ type: SET_TOKEN, payload: token });
    return token;
  } catch(error) {
    yield put({ type: LOGIN_ERROR });
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

function* registerFlow() {
  while (true) {
    const { payload } = yield take(REGISTER);
    yield call(registerAuthorize, payload);
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
  clearFlow,
}