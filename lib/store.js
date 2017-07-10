Object.defineProperty(exports,"__esModule",{value:true});exports.persistor=undefined;var _redux=require('redux');
var _reduxPersistImmutable=require('redux-persist-immutable');
var _constants=require('redux-persist-immutable/constants');
var _reduxLogger=require('redux-logger');
var _reactNative=require('react-native');
var _reduxActionBuffer=require('redux-action-buffer');var _reduxActionBuffer2=_interopRequireDefault(_reduxActionBuffer);
var _reduxPersistTransformImmutable=require('redux-persist-transform-immutable');var _reduxPersistTransformImmutable2=_interopRequireDefault(_reduxPersistTransformImmutable);
var _immutable=require('immutable');


var _reduxSaga=require('redux-saga');var _reduxSaga2=_interopRequireDefault(_reduxSaga);


var _index=require('./sagas/index');var _index2=_interopRequireDefault(_index);


var _reducers=require('./reducers');var _reducers2=_interopRequireDefault(_reducers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var sagaMiddleware=(0,_reduxSaga2.default)();


var middlewares=[(0,_reduxActionBuffer2.default)(_constants.REHYDRATE),sagaMiddleware];


var stateTransformer=function stateTransformer(state){
if(_immutable.Iterable.isIterable(state))return state.toJS();else
return state;
};


if(__DEV__){
middlewares.push((0,_reduxLogger.createLogger)({
stateTransformer:stateTransformer}));

}


var store=(0,_redux.createStore)(_reducers2.default,

(0,_redux.compose)(
_redux.applyMiddleware.apply(undefined,middlewares),
(0,_reduxPersistImmutable.autoRehydrate)()));





var persistor=exports.persistor=(0,_reduxPersistImmutable.persistStore)(store,{storage:_reactNative.AsyncStorage,whitelist:['auth']},function(err,state){
console.log('persistStore',state);
});

sagaMiddleware.run(_index2.default);exports.default=


store;