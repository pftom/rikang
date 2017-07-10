Object.defineProperty(exports,"__esModule",{value:true});exports.getHospitalDoctorsSelector=exports.getHospitalSelector=exports.getHospitalsSelector=undefined;var _reselect=require('reselect');


var _commonSelector=require('./commonSelector');


var getHospitals=function getHospitals(state){return state.getIn(['hospital','hospitals']);};

var getHospitalsSelector=exports.getHospitalsSelector=(0,_reselect.createSelector)(
[getHospitals],
function(hospitals){return{
hospitals:hospitals};});




var getHospital=function getHospital(state){return state.getIn(['hospital','hospital']);};

var getHospitalSelector=exports.getHospitalSelector=(0,_reselect.createSelector)(
[getHospital],
function(hospital){return{
hospital:hospital};});




var getHospitalDoctors=function getHospitalDoctors(state){return state.getIn(['hospital','hospitalDoctors']);};

var getHospitalDoctorsSelector=exports.getHospitalDoctorsSelector=(0,_reselect.createSelector)(
[getHospitalDoctors],
function(hospitalDoctors){return{
hospitalDoctors:hospitalDoctors};});