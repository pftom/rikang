Object.defineProperty(exports,"__esModule",{value:true});var _reduxImmutable=require('redux-immutable');
var _immutable=require('redux-form/immutable');
var _immutable2=require('immutable');

var _nav=require('./nav');var _nav2=_interopRequireDefault(_nav);
var _auth=require('./auth');var _auth2=_interopRequireDefault(_auth);
var _home=require('./home');var _home2=_interopRequireDefault(_home);
var _hospital=require('./hospital');var _hospital2=_interopRequireDefault(_hospital);
var _doctor=require('./doctor');var _doctor2=_interopRequireDefault(_doctor);
var _patient=require('./patient');var _patient2=_interopRequireDefault(_patient);
var _qa=require('./qa');var _qa2=_interopRequireDefault(_qa);
var _answer=require('./answer');var _answer2=_interopRequireDefault(_answer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var AppReducer=(0,_reduxImmutable.combineReducers)({
nav:_nav2.default,
auth:_auth2.default,
home:_home2.default,
hospital:_hospital2.default,
doctor:_doctor2.default,
patient:_patient2.default,
qa:_qa2.default,
answer:_answer2.default,
form:_immutable.reducer});exports.default=


AppReducer;