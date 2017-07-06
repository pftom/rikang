import { createStore, applyMiddleware, compose } from 'redux';
import {  persistStore, autoRehydrate } from 'redux-persist-immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import createActionBuffer from 'redux-action-buffer';
import immutableTransforms from 'redux-persist-transform-immutable';
import { Iterable } from 'immutable';

//import async action handle component
import createSagaMiddleware from 'redux-saga';

//test saga
import rootSaga from './sagas/index';


import rootReduers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ createActionBuffer(REHYDRATE) ];

middlewares.push(sagaMiddleware)

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
}

if (__DEV__) {
  middlewares.push(createLogger({
    stateTransformer,
  }));
}


const store = createStore(
    rootReduers,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  );


export const persistor = persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] }, (err, state) => {
  console.log('persistStore', state);
});

sagaMiddleware.run(rootSaga);


export default store;