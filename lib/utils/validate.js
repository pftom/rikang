Object.defineProperty(exports,"__esModule",{value:true});var required=function required(value){return value?undefined:'Required';};

var maxLength=function maxLength(max){return function(value){return(
value&&value.length>max?'\u5BC6\u7801\u957F\u5EA6\u6700\u591A\u4E3A'+max:undefined);};};
var maxLength15=maxLength(15);

var number=function number(value){return value&&isNaN(Number(value))?'必须是11位数字':undefined;};

var minLength=function minLength(min){return function(value){return(
value&&value.length<min?'\u5BC6\u7801\u957F\u5EA6\u81F3\u5C11\u4E3A'+min:undefined);};};
var minLength5=minLength(5);

var validate=function validate(values){
var errors={};
if(!values.get('username')){
errors.username='Required';
}

if(!values.get('password')){
errors.password='Required';
}

return errors;
};exports.



required=required;exports.
maxLength15=maxLength15;exports.
minLength5=minLength5;exports.
number=number;exports.
validate=validate;