import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { autoRehydrate, persistStore, getStoredState } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';

import AppReducers from './reducers/index';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}



const store = createStore(
  AppReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(...middleware),
  )
);

export const persistor = persistStore(store, { storage: AsyncStorage, whitelist: ['token'] }, () => {
  console.log('completed');
})

export default store;