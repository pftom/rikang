Object.defineProperty(exports,"__esModule",{value:true});exports.getDoctorInfoSelector=exports.getDoctorSelector=undefined;var _reselect=require('reselect');


var _commonSelector=require('./commonSelector');


var getDoctor=function getDoctor(state){return state.getIn(['home','doctor']);};
var getDoctorAnswers=function getDoctorAnswers(state){return state.getIn(['doctor','answers']);};
var getDoctorComments=function getDoctorComments(state){return state.getIn(['doctor','comments']);};

var getDoctorSelector=exports.getDoctorSelector=(0,_reselect.createSelector)(
[getDoctor,getDoctorAnswers,getDoctorComments],
function(doctor,answers,comments){return{
doctor:doctor,
answers:answers,
comments:comments};});



var getDoctorInfo=function getDoctorInfo(state){return state.getIn(['doctor','doctorInfo']);};

var getDoctorInfoSelector=exports.getDoctorInfoSelector=(0,_reselect.createSelector)(
[getDoctorInfo],
function(doctorInfo){return{
doctorInfo:doctorInfo};});