'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.handleTime=undefined;exports.default=








px2dp;var _reactNative=require('react-native');var deviceH=_reactNative.Dimensions.get('window').height;var deviceW=_reactNative.Dimensions.get('window').width;var basePx=375;function px2dp(px){
return px*deviceW/basePx;
}

var handleTime=exports.handleTime=function handleTime(time){
var afterTime='';
afterTime+=time.slice(0,10);
afterTime+=' ';
afterTime+=time.slice(11,19);
return afterTime;
};