Object.defineProperty(exports,"__esModule",{value:true});var _reactRedux=require('react-redux');

var _App=require('../App');var _App2=_interopRequireDefault(_App);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var mapStateToProps=function mapStateToProps(state){
return{
isLoggedIn:state.getIn(['auth','isLoggedIn'])};

};exports.default=

(0,_reactRedux.connect)(mapStateToProps)(_App2.default);