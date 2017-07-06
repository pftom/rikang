import { all } from 'redux-saga/effects';

import { watchAndLog } from './user';

export default function* rootSaga() {
  yield ([
    watchAndLog(),
  ]);
}