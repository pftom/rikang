import { delay } from 'redux-saga';
import { put, take, call, fork, cancel, takeEvery } from 'redux-saga/effects';


import {
  CREATE_NEW_ORDER,
  CREATE_NEW_ORDER_SUCCESS,
  CREATE_NEW_ORDER_ERROR,

  PAY,
  PAY_ERROR,
  PAY_SUCCESS,

  CANCEL_ORDER,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_ERROR,

  REFUND,
  REFUND_SUCCESS,
  REFUND_ERROR,

  FINISH_ORDER,
  FINISH_ORDER_SUCCESS,
  FINISH_ORDER_ERROR,

  GET_CLIENT_IP,
  GET_CLIENT_IP_SUCCESS,
  GET_CLIENT_IP_ERROR,

  ADD_COMMENT_FOR_ORDER,
  ADD_COMMENT_FOR_ORDER_ERROR,
  ADD_COMMENT_FOR_ORDER_SUCCESS,

  GET_PATIENT_SERVICES,

  GET_MEMBERSHIP,
  GET_MEMBERSHIP_SUCCESS,
  GET_MEMBERSHIP_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, serviceApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

function* getClientIp(payload) {
  try {

    const clientIp = yield call(request.get, 'freegeoip.net/json/', null, null);

    yield put({ type: GET_CLIENT_IP_SUCCESS, clientIp });
  } catch (error) {
    yield put({ type: GET_CLIENT_IP_ERROR, error });
  }
}

function* createNewComment(payload) {
  try {
    const { token, body } = payload;


    yield call(request.post, base + serviceApi.createNewComment, body, token);

    yield put({ type: ADD_COMMENT_FOR_ORDER_SUCCESS });
    yield put({ type: GET_PATIENT_SERVICES, payload: { token }})
  } catch (error) {
    yield put({ type: ADD_COMMENT_FOR_ORDER_ERROR, error });
  }
}


function* createNewOrder(payload) {
  try {
    const { token, body } = payload;


    const newOrder = yield call(request.post, base + serviceApi.createNewOrder, body, token);

    yield put({ type: CREATE_NEW_ORDER_SUCCESS, newOrder });
  } catch (error) {
    yield put({ type: CREATE_NEW_ORDER_ERROR, error });
  }
}


function* cancelOrder(payload) {
  try {
    const { token, body } = payload;


    yield call(request.post, base + serviceApi.cancel, body, token);

    yield put({ type: CANCEL_ORDER_SUCCESS });
  } catch (error) {
    yield put({ type: CANCEL_ORDER_ERROR, error });
  }
}

function* pay(payload) {
  try {
    const { token, body } = payload;

    const charge = yield call(request.post, base + serviceApi.pay, body, token);

    yield put({ type: PAY_SUCCESS, charge });
  } catch (error) {
    yield put({ type: PAY_ERROR, error });
  }
}

function* refund(action) {
  try {
    const { payload } = action;
    const { token, body } = payload;

    const refund = yield call(request.post, base + serviceApi.refund, body, token);

    yield put({ type: REFUND_SUCCESS, refund });
    yield put({ type: GET_PATIENT_SERVICES, payload: { token }})
  } catch (error) {
    yield put({ type: REFUND_ERROR, error });
  }
}

function* finishOrder(payload) {
  try {
    const { token, body } = payload;

    yield call(request.post, base + serviceApi.finishOrder, body, token);

    yield put({ type: FINISH_ORDER_SUCCESS });
  } catch (error) {
    yield put({ type: FINISH_ORDER_SUCCESS, error });
  }
}

function* getMemberShip(payload) {
  try {
    const { token } = payload;

    const membership = yield call(request.get, base + serviceApi.memberShip, null, token);

    yield put({ type: GET_MEMBERSHIP_SUCCESS, membership });
  } catch (error) {
    yield put({ type: GET_MEMBERSHIP_ERROR, error });
  }
}

//HOSPITAL async actions handle function
function* watchCreateNewOrder() {
  while (true) {
    const { payload } = yield take(CREATE_NEW_ORDER);

    yield call(createNewOrder, payload);
  }
}

function* watchCancel() {
  while (true) {
    const { payload } = yield take(CANCEL_ORDER);

    yield call(cancelOrder, payload);
  }
}

function* watchPay() {
  while (true) {
    const { payload } = yield take(PAY);

    yield call(pay, payload);
  }
}

function* watchRefund() {

  yield takeEvery(REFUND, refund)
}

function* watchFinishOrder() {
  while (true) {
    const { payload } = yield take(FINISH_ORDER);

    yield call(finishOrder, payload);
  }
}

function* watchGetClientIp() {
  while (true) {
    yield take(GET_CLIENT_IP);

    yield call(getClientIp);
  }
}

function* watchCreateNewComment() {
  while (true) {
    const { payload } = yield take(ADD_COMMENT_FOR_ORDER);

    yield call(createNewComment, payload);
  }
}

function* watchGetMemberShip() {
  while (true) {
    const { payload } = yield take(GET_MEMBERSHIP);

    yield call(getMemberShip, payload);
  }
}

export {
  watchCreateNewOrder,
  watchCancel,
  watchPay,
  watchRefund,
  watchFinishOrder,

  watchGetClientIp,
  watchCreateNewComment,

  watchGetMemberShip,
}