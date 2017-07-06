import { delay } from 'redux-saga';
import { put, take, select } from 'redux-saga/effects';
import { LOGIN } from '../constants/';

function* watchAndLog() {
  while (true) {
    const action = yield take(LOGIN);
    const state = yield select();

    console.log('action', action);
    console.log('state after', state.toJS());
  }
}

export {
  watchAndLog,
}