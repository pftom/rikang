Object.defineProperty(exports,"__esModule",{value:true});var sleep=function sleep(ms){return new Promise(function(resolve){return setTimeout(resolve,ms);});};

var asyncValidate=function asyncValidate(values){
return sleep(1000).
then(function(){
if(!['13786684946','13786684947','13786684948'].includes(values.get('username'))){
throw{username:'That username is taken'};
}
});
};exports.default=

asyncValidate;