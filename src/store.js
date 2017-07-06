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

//async actions saga
import rootSaga from './sagas/index';

//process other sync actions
import rootReduers from './reducers';

//create saga middleware for store process async actions
const sagaMiddleware = createSagaMiddleware();

//createActionBuffer use for high-priority loading persist data in then storeage
const middlewares = [ createActionBuffer(REHYDRATE), sagaMiddleware ];

//for redux-logger transform immutable data to object, for semantic 
const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
}

//when environment equals development, use redux-logger console data in chrome
if (__DEV__) {
  middlewares.push(createLogger({
    stateTransformer,
  }));
}

//construct the store for state tree
const store = createStore(
    rootReduers,
    compose(
      applyMiddleware(...middlewares),
      autoRehydrate(),
    ),
  );


//persist the store for offline persist 
export const persistor = persistStore(store, { storage: AsyncStorage, whitelist: ['auth'] }, (err, state) => {
  console.log('persistStore', state);
});

sagaMiddleware.run(rootSaga);


export default store;