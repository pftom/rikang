Object.defineProperty(exports,"__esModule",{value:true});var _constants=require('redux-persist-immutable/constants');
var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);


var _constants2=require('../constants/');










var _store=require('../store');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var initialAuthState=_immutable2.default.Map({
token:null,
isLoggedIn:false,
isLoadingData:false,
loginError:false,
loginSuccess:false,
registerError:false});


var auth=function auth(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:initialAuthState;var action=arguments[1];
switch(action.type){


case _constants2.REGISTER:

return state.merge({
isLoadingData:true,
registerError:false});


case _constants2.REGISTER_ERROR:

return state.merge({
isLoadingData:false,
registerError:true});


case _constants2.LOGIN:

return state.merge({
isLoadingData:true,
loginError:false,
loginSuccess:false});


case _constants2.LOGIN_SUCCESS:


return state.merge({
isLoggedIn:true,
isLoadingData:false,
loginSuccess:true});


case _constants2.LOGIN_ERROR:


return state.merge({
isLoadingData:false,
loginError:true});


case _constants2.LOGOUT:

_store.persistor.purge();


return state.merge({
isLoggedIn:false,
token:null,
loginError:false,
loginSuccess:false});


case _constants2.CLEAR_ERROR:

return state.merge({
loginError:false,
registerError:false});


case _constants2.SET_TOKEN:var


payload=action.payload;
return state.merge({
token:payload});


case _constants2.CLEAR_TOKEN:


return state.merge({
token:null});


case _constants.REHYDRATE:var

_auth=action.payload.auth;
var token=_auth&&_auth.has('token')&&_auth.get('token');


var isLoggedIn=!!token?true:false;

return state.merge({
loginError:null,
registerError:false,
isLoggedIn:isLoggedIn,
token:token,
loginSuccess:false});


default:
return state;}

};exports.default=

auth;