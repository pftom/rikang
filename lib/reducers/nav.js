Object.defineProperty(exports,"__esModule",{value:true});var _reactNavigation=require('react-navigation');
var _immutable=require('immutable');var _immutable2=_interopRequireDefault(_immutable);

var _AppNavigator=require('../navigators/AppNavigator');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var nav=function nav(state,action){
var nextState=void 0;
switch(action.type){
default:
nextState=_AppNavigator.AppNavigator.router.getStateForAction(action,state);
break;}



return nextState||state;
};exports.default=

nav;