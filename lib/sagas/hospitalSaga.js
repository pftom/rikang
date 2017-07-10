Object.defineProperty(exports,"__esModule",{value:true});exports.watchGetHospitalDoctors=exports.watchGetHospitals=exports.watchGetHospital=undefined;var _reduxSaga=require('redux-saga');
var _effects=require('redux-saga/effects');


var _constants=require('../constants/');














var _request=require('../configs/request');var _request2=_interopRequireDefault(_request);

var _config=require('../configs/config');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[



getSingleHospital,











getHospitals,









getSingleHospitalDoctors,










watchGetHospital,








watchGetHospitals,







watchGetHospitalDoctors].map(regeneratorRuntime.mark);function getSingleHospital(payload){var id,token,hospital;return regeneratorRuntime.wrap(function getSingleHospital$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;id=payload.id,token=payload.token;_context.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleHospital,null,token);case 4:hospital=_context.sent;_context.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_HOSPITAL_SUCCESS,hospital:hospital});case 7:_context.next=13;break;case 9:_context.prev=9;_context.t0=_context['catch'](0);_context.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_HOSPITAL_ERROR});case 13:case'end':return _context.stop();}}},_marked[0],this,[[0,9]]);}function getHospitals(payload){var token,hospitals;return regeneratorRuntime.wrap(function getHospitals$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;token=payload.token;_context2.next=4;return(0,_effects.call)(_request2.default.get,_config.base+_config.homeApi.hospitals,null,token);case 4:hospitals=_context2.sent;_context2.next=7;return(0,_effects.put)({type:_constants.GET_HOSPITALS_SUCCESS,hospitals:hospitals});case 7:_context2.next=13;break;case 9:_context2.prev=9;_context2.t0=_context2['catch'](0);_context2.next=13;return(0,_effects.put)({type:_constants.GET_HOSPITALS_ERROR});case 13:case'end':return _context2.stop();}}},_marked[1],this,[[0,9]]);}function getSingleHospitalDoctors(payload){var token,id,hospitalDoctors;return regeneratorRuntime.wrap(function getSingleHospitalDoctors$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;token=payload.token,id=payload.id;_context3.next=4;return(0,_effects.call)(_request2.default.get,_config.base+(0,_config.homeSingleApi)(id).singleHospitalDoctors,null,token);case 4:hospitalDoctors=_context3.sent;_context3.next=7;return(0,_effects.put)({type:_constants.GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS,hospitalDoctors:hospitalDoctors});case 7:_context3.next=13;break;case 9:_context3.prev=9;_context3.t0=_context3['catch'](0);_context3.next=13;return(0,_effects.put)({type:_constants.GET_SINGLE_HOSPITAL_DOCTORS_ERROR});case 13:case'end':return _context3.stop();}}},_marked[2],this,[[0,9]]);}function watchGetHospital(){var _ref,payload;return regeneratorRuntime.wrap(function watchGetHospital$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:if(!true){_context4.next=9;break;}_context4.next=3;return(0,_effects.take)(_constants.GET_SINGLE_HOSPITAL);case 3:_ref=_context4.sent;payload=_ref.payload;_context4.next=7;return(0,_effects.call)(getSingleHospital,payload);case 7:_context4.next=0;break;case 9:case'end':return _context4.stop();}}},_marked[3],this);}function watchGetHospitals(){var _ref2,payload;return regeneratorRuntime.wrap(function watchGetHospitals$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:if(!true){_context5.next=9;break;}_context5.next=3;return(0,_effects.take)(_constants.GET_HOSPITALS);case 3:_ref2=_context5.sent;payload=_ref2.payload;_context5.next=7;return(0,_effects.call)(getHospitals,payload);case 7:_context5.next=0;break;case 9:case'end':return _context5.stop();}}},_marked[4],this);}function watchGetHospitalDoctors(){var _ref3,payload;return regeneratorRuntime.wrap(function watchGetHospitalDoctors$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:if(!
true){_context6.next=9;break;}_context6.next=3;return(
(0,_effects.take)(_constants.GET_SINGLE_HOSPITAL_DOCTORS));case 3:_ref3=_context6.sent;payload=_ref3.payload;_context6.next=7;return(
(0,_effects.call)(getSingleHospitalDoctors,payload));case 7:_context6.next=0;break;case 9:case'end':return _context6.stop();}}},_marked[5],this);}exports.







watchGetHospital=watchGetHospital;exports.
watchGetHospitals=watchGetHospitals;exports.
watchGetHospitalDoctors=watchGetHospitalDoctors;