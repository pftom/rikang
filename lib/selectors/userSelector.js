Object.defineProperty(exports,"__esModule",{value:true});exports.getPatientSelector=undefined;var _reselect=require('reselect');


var _commonSelector=require('./commonSelector');

var getPatientSelector=exports.getPatientSelector=(0,_reselect.createSelector)(
[_commonSelector.getToken],
function(token){return{
token:token};});