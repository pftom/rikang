Object.defineProperty(exports,"__esModule",{value:true});exports.watchUpdatePatientProfile=exports.watchGetPatientProfile=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');










var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[



getPatientProfile,











updatePatientProfile,











watchGetPatientProfile,








watchUpdatePatientProfile].map(regeneratorRuntime.mark);function getPatientProfile(payload){var token,patientInfo;return regeneratorRuntime.wrap(function getPatientProfile$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+_config.usersApi.patientProfile,null,token);case 4:patientInfo=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_PATIENT_PROFILE_SUCCESS,patientInfo:patientInfo});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_PATIENT_PROFILE_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function updatePatientProfile(payload){var token,body;return regeneratorRuntime.wrap(function updatePatientProfile$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;token=payload.token,body=payload.body;_context2.next=4;return(0,_effects.call)(_request2.default.put,_config.base+_config.usersApi.updatePatientProfile,token,body,true);case 4:_context2.next=6;return(0,_effects.put)({type:_constants.UPDATE_PATIENT_PROFILE_SUCCESS});case 6:_context2.next=12;break;case 8:_context2.prev=8;_context2.t0=_context2['catch'](0);_context2.next=12;return(0,_effects.put)({type:_constants.UPDATE_PATIENT_PROFILE_ERROR});case 12:case'end':return _context2.stop();}}},_marked[1],this,[[0,8]]);}function watchGetPatientProfile(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetPatientProfile$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!true){_context3.next=9;break;}_context3.next=3;return(0,_effects.take)(_constants.GET_PATIENT_PROFILE);case 3:_ref=_context3.sent;payload=_ref.payload;_context3.next=7;return(0,_effects.call)(getPatientProfile,payload);case 7:_context3.next=0;break;case 9:case'end':return _context3.stop();}}},_marked[2],this);}function watchUpdatePatientProfile(){var _ref2,payload;return regeneratorRuntime.wrap(function watchUpdatePatientProfile$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!
true){_context4.next=9;break;}_context4.next=3;return(
(0,_effects.take)(_constants.UPDATE_PATIENT_PROFILE));case 3:_ref2=_context4.sent;payload=_ref2.payload;_context4.next=7;return(

(0,_effects.call)(updatePatientProfile,payload));case 7:_context4.next=0;break;case 9:case'end':return _context4.stop();}}},_marked[3],this);}exports.







watchGetPatientProfile=watchGetPatientProfile;exports.
watchUpdatePatientProfile=watchUpdatePatientProfile;