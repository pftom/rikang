Object.defineProperty(exports,"__esModule",{value:true});
var clearItem=function clearItem(ITEM_IDENTITY){
return{
type:ITEM_IDENTITY};

};

var setItem=function setItem(ITEM_IDENTITY,payload){return function(dispatch){
dispatch({
type:ITEM_IDENTITY,
payload:payload});

};};exports.


clearItem=clearItem;exports.
setItem=setItem;