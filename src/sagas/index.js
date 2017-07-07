import { all } from 'redux-saga/effects';

import { loginFlow, registerFlow } from './userSaga';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    registerFlow(),
  ]);
}