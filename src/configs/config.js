'use strict';

export const commonApi = {
  base: 'http://127.0.0.1:8000/',
};

export const homeApi = {
  posts: 'home/posts/',
  hospitals: 'home/hospitals/',
  doctors: 'home/doctors/',
};

export const homeSingleApi = (id) => ({
  singlePost: 'home/posts/${id}/',
  singleHospital: 'home/hospitals/${id}/',
  singleHospitalDoctor: 'home/hospitals/${id}/doctors/',
  singleDoctor: 'home/doctors/${id}/',
  singleDoctorInfo: 'home/doctors/${id}/info/',
  singleDoctorAnswer: 'home/doctors/${id}/answers/',
  addsingleDoctorFav: 'home/doctors/${id}/fav/',
  singleDoctorComments: 'home/doctors/${id}/comments/',
  addsingleDoctorComments: 'home/doctors/${id}/comments/new/',
});

export const usersApi = {
  register: 'users/register/',
  login: 'users/login/',
  changePassword: 'users/change-password/',
  doctorInit: 'users/doctor-init/',
  doctorProfile: 'users/doctor-profile/',
  updateDoctorProfile: 'users/doctor-profile/',
  doctorInfo: 'users/doctor-info/',
  updateDoctorInfo: 'users/doctor-info/',
  patientProfile: 'users/patient-profile/',
  updatePatientProfile: 'users/patient-profile/',
};

export const qaApi = {
  questions: 'qa/questions/',
  addQuestions: 'qa/questions/new/',
};

export const qaSingleApi = (id) => ({
  addQuestionImg: '/qa/questions/${id}/addimg/',
  singleQuestion: 'qa/questions/${id}/',
  updateSingleQuestion: 'qa/questions/${id}/',
  singleQuestionImgs: 'qa/questions/${id}/images/',
  singleQuestionStar: 'qa/questions/${id}/star/',
  singleQuestionAnswers: 'qa/questions/${id}/answers/',
  addSingleQuestionAnswers: 'qa/questions/${id}/answers/new/',
  singleAnswer: 'qa/answers/${id}/',
  singleAnswerUpvote: 'qa/answers/${id}/upvote/',
});
