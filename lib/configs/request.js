'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _queryString=require('query-string');var _queryString2=_interopRequireDefault(_queryString);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var header=function header(METHOD,token,multiform){
var auth={};
var multiForm={};

if(token){
auth={
'Authorization':'Token '+token};

}


if(multiform){
multiForm={
'Content-Type':'multipart/form-data'};

}

return{
method:METHOD,
headers:_extends({
'Accept':'application/json',
'Content-Type':'application/json'},
auth,
multiForm)};


};

var request={};

request.get=function(url,params,token){
var options=null;
if(params){
url+='?'+_queryString2.default.stringify(params);
}

if(token){
options=_lodash2.default.extend(header('GET',token));
}

console.log('url',url);

return fetch(url,options).
then(function(response){
console.log('response',response);
if(response.status!==200||!response.ok){
throw response.json();
}
return response.json();
});
};

request.post=function(url,body,token,multiform){
var options=_lodash2.default.extend(header('POST',token,multiform),{
body:JSON.stringify(body)});


return fetch(url,options).
then(function(response){
console.log(response);
if(![200,201].includes(response.status)||!response.ok){
throw response.json();
}
return response.json();
});
};

request.put=function(url,token,body,multiform){


var options=_lodash2.default.extend(header('PUT',token,multiform),{
body:JSON.stringify(body)});


return fetch(url,options).
then(function(response){
if(response.status!==200||!response.ok){
throw response.json();
}
return response.json();
});
};exports.default=

request;