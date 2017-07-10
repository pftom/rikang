Object.defineProperty(exports,"__esModule",{value:true});exports.getInputInitial=undefined;var _reselect=require('reselect');


var getLoginError=function getLoginError(state){return state.getIn(['auth','loginError']);};
var getLoginSuccess=function getLoginSuccess(state){return state.getIn(['auth','loginSuccess']);};
var getIsLoadingData=function getIsLoadingData(state){return state.getIn(['auth','isLoadingData']);};
var getRegisterError=function getRegisterError(state){return state.getIn(['auth','registerError']);};

var getInputInitial=exports.getInputInitial=(0,_reselect.createSelector)(
[getLoginError,getLoginSuccess,getIsLoadingData,getRegisterError],
function(loginError,loginSuccess,isLoadingData,registerError){return{
loginError:loginError,
loginSuccess:loginSuccess,
isLoadingData:isLoadingData,
registerError:registerError};});