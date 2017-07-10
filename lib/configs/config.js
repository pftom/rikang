'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var base=exports.base='http://localhost:8000/';

var homeApi=exports.homeApi={
posts:'home/posts/',
hospitals:'home/hospitals/',
doctors:'home/doctors/'};


var homeSingleApi=exports.homeSingleApi=function homeSingleApi(id){return{
singlePost:'home/posts/'+id+'/',
singleHospital:'home/hospitals/'+id+'/',
singleHospitalDoctors:'home/hospitals/'+id+'/doctors/',
singleDoctor:'home/doctors/'+id+'/',
singleDoctorInfo:'home/doctors/'+id+'/info/',
singleDoctorAnswers:'home/doctors/'+id+'/answers/',
addSingleDoctorFav:'home/doctors/'+id+'/fav',
singleDoctorComments:'home/doctors/'+id+'/comments/',
addsingleDoctorComments:'home/doctors/${id}/comments/new'};};


var usersApi=exports.usersApi={
register:'users/register',
login:'users/login/',
changePassword:'users/change-password/',
doctorInit:'users/doctor-init/',
doctorProfile:'users/doctor-profile/',
updateDoctorProfile:'users/doctor-profile/',
doctorInfo:'users/doctor-info/',
updateDoctorInfo:'users/doctor-info/',
patientProfile:'users/patient-profile/',
updatePatientProfile:'users/patient-profile/'};


var qaApi=exports.qaApi={
questions:'qa/questions/',
addQuestion:'qa/questions/new/'};


var qaSingleApi=exports.qaSingleApi=function qaSingleApi(id){return{
addQuestionImg:'/qa/questions/'+id+'/addimg/',
singleQuestion:'qa/questions/'+id+'/',
updateSingleQuestion:'qa/questions/'+id+'/',
singleQuestionAllImg:'qa/questions/'+id+'/images/',
singleQuestionStar:'qa/questions/'+id+'/star',
singleQuestionAnswer:'qa/questions/'+id+'/answers/',
addSingleQuestionAnswers:'qa/questions/'+id+'/answers/new/',
singleAnswer:'qa/answers/'+id+'/',
singleAnswerUpvote:'qa/answers/'+id+'/upvote/',
singleAnswerAllComments:'qa/answers/{id}/comments/',
addSingleAnswerComments:'qa/answers/{answer_id}/comments/new'};};