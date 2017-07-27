import { delay } from 'redux-saga';
import { put, take, call, fork, cancel, } from 'redux-saga/effects';


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
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, serviceApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';


function* createNewOrder(payload) {
  try {
    const { token, body } = payload;


    const order = yield call(request.post, base + serviceApi.createNewOrder, body, token);

    yield put({ type: CREATE_NEW_ORDER_SUCCESS, order });
  } catch (error) {
    yield put({ type: CREATE_NEW_ORDER_ERROR, error });
  }
}


function* cancelOrder(payload) {
  try {
    const { token, order_no } = payload;

    const body = {
      order_no
    }

    yield call(request.post, base + serviceApi.cancel, body, token);

    yield put({ type: CANCEL_ORDER_SUCCESS, order });
  } catch (error) {
    yield put({ type: CANCEL_ORDER_ERROR, error });
  }
}

function* pay(payload) {
  try {
    const { token, body } = payload;

    const paidOrder = yield call(request.post, base + serviceApi.pay, body, token);

    yield put({ type: PAY_SUCCESS, paidOrder });
  } catch (error) {
    yield put({ type: PAY_ERROR, error });
  }
}

function* refund(payload) {
  try {
    const { token, body } = payload;

    const refund = yield call(request.post, base + serviceApi.refund, body, token);

    yield put({ type: REFUND_SUCCESS, refund });
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
  while (true) {
    const { payload } = yield take(REFUND);

    yield call(refund, payload);
  }
}

function* watchFinishOrder() {
  while (true) {
    const { payload } = yield take(FINISH_ORDER);

    yield call(finishOrder, payload);
  }
}

export {
  watchCreateNewOrder,
  watchCancel,
  watchPay,
  watchRefund,
  watchFinishOrder,
}