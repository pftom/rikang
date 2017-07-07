import { all } from 'redux-saga/effects';

import { loginFlow, registerFlow, clearFlow } from './userSaga';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    registerFlow(),
    clearFlow(),
  ]);
}