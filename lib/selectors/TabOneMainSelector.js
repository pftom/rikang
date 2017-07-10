Object.defineProperty(exports,"__esModule",{value:true});exports.getPostSelector=exports.getHomeSelector=undefined;var _reselect=require('reselect');


var _commonSelector=require('./commonSelector');

var getDoctors=function getDoctors(state){return state.getIn(['home','doctors']);};
var getPosts=function getPosts(state){return state.getIn(['home','posts']);};
var getLoadingError=function getLoadingError(state){return state.getIn(['home','loadingError']);};


var getHomeSelector=exports.getHomeSelector=(0,_reselect.createSelector)(
[_commonSelector.getToken,getDoctors,getPosts,getLoadingError],
function(token,doctors,posts,loadingError){return{
token:token,
doctors:doctors,
posts:posts,
loadingError:loadingError};});





var getPost=function getPost(state){return state.getIn(['home','post']);};

var getPostSelector=exports.getPostSelector=(0,_reselect.createSelector)(
[getPost],
function(post){return{
post:post};});