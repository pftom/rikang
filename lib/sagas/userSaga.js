Object.defineProperty(exports,"__esModule",{value:true});exports.clearFlow=exports.changePasswordFlow=exports.registerFlow=exports.loginFlow=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');






















var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[





loginAuthorize,












registerAuthorize,










changePassword,










loginFlow,














registerFlow,







changePasswordFlow,







clearFlow].map(regeneratorRuntime.mark);function loginAuthorize(payload){var _ref,token;return regeneratorRuntime.wrap(function loginAuthorize$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log('base',_config.base+_config.usersApi.login);_context.prev=1;_context.next=4;return(0,_effects.call)(_request2.default.post,_config.base+_config.usersApi.login,payload);case 4:_ref=_context.sent;token=_ref.token;_context.next=8;return(0,_effects.put)({type:_constants.LOGIN_SUCCESS});case 8:_context.next=10;return(0,_effects.put)({type:_constants.SET_TOKEN,payload:token});case 10:return _context.abrupt('return',token);case 13:_context.prev=13;_context.t0=_context['catch'](1);_context.next=17;return(0,_effects.put)({type:_constants.LOGIN_ERROR});case 17:case'end':return _context.stop();}}},_marked[0],this,[[1,13]]);}function registerAuthorize(payload){return regeneratorRuntime.wrap(function registerAuthorize$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return(0,_effects.call)(_request2.default.post,_config.base+_config.usersApi.register,payload);case 3:_context2.next=5;return(0,_effects.put)({type:_constants.REGISTER_SUCCESS});case 5:_context2.next=7;return(0,_effects.put)({type:_constants.LOGIN,payload:payload});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.REGISTER_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function changePassword(payload){var body,token;return regeneratorRuntime.wrap(function changePassword$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;body=payload.body,token=payload.token;_context3.next=4;return(0,_effects.call)(_request2.default.put,_config.base+_config.usersApi.changePassword,token,body);case 4:_context3.next=6;return(0,_effects.put)({type:_constants.CHANGE_PASSWORD_SUCCESS});case 6:_context3.next=12;break;case 8:_context3.prev=8;_context3.t0=_context3['catch'](0);_context3.next=12;return(0,_effects.put)({type:_constants.CHANGE_PASSWORD_ERROR});case 12:case'end':return _context3.stop();}}},_marked[2],this,[[0,8]]);}function loginFlow(){var _ref2,payload,task,action;return regeneratorRuntime.wrap(function loginFlow$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!true){_context4.next=18;break;}_context4.next=3;return(0,_effects.take)(_constants.LOGIN);case 3:_ref2=_context4.sent;payload=_ref2.payload;_context4.next=7;return(0,_effects.fork)(loginAuthorize,payload);case 7:task=_context4.sent;_context4.next=10;return(0,_effects.take)([_constants.LOGOUT,_constants.LOGIN_ERROR]);case 10:action=_context4.sent;if(!(action.type===_constants.LOGOUT)){_context4.next=14;break;}_context4.next=14;return(0,_effects.cancel)(task);case 14:_context4.next=16;return(0,_effects.put)({type:_constants.CLEAR_TOKEN});case 16:_context4.next=0;break;case 18:case'end':return _context4.stop();}}},_marked[3],this);}function registerFlow(){var _ref3,payload;return regeneratorRuntime.wrap(function registerFlow$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!true){_context5.next=9;break;}_context5.next=3;return(0,_effects.take)(_constants.REGISTER);case 3:_ref3=_context5.sent;payload=_ref3.payload;_context5.next=7;return(0,_effects.call)(registerAuthorize,payload);case 7:_context5.next=0;break;case 9:case'end':return _context5.stop();}}},_marked[4],this);}function changePasswordFlow(){var _ref4,payload;return regeneratorRuntime.wrap(function changePasswordFlow$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(!true){_context6.next=9;break;}_context6.next=3;return(0,_effects.take)(_constants.CHANGE_PASSWORD);case 3:_ref4=_context6.sent;payload=_ref4.payload;_context6.next=7;return(0,_effects.call)(changePassword,payload);case 7:_context6.next=0;break;case 9:case'end':return _context6.stop();}}},_marked[5],this);}function clearFlow(){return regeneratorRuntime.wrap(function clearFlow$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:if(!
true){_context7.next=9;break;}_context7.next=3;return(
(0,_effects.take)(_constants.CLEAR));case 3:_context7.next=5;return(
(0,_reduxSaga.delay)(1000));case 5:_context7.next=7;return(
(0,_effects.put)({type:_constants.CLEAR_ERROR}));case 7:_context7.next=0;break;case 9:case'end':return _context7.stop();}}},_marked[6],this);}exports.






loginFlow=loginFlow;exports.
registerFlow=registerFlow;exports.
changePasswordFlow=changePasswordFlow;exports.
clearFlow=clearFlow;