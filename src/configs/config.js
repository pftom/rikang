'use strict';

export const base = 'http://localhost:8000/';

export const homeApi = {
  posts: 'home/posts/',
  hospitals: 'home/hospitals/',
  doctors: 'home/doctors/',
};

export const homeSingleApi = (id) => ({
  singlePost: `home/posts/${id}/`,
  singleHospital: `home/hospitals/${id}/`,
  addSinglePostFav: `home/posts/${id}/fav`,
  singleHospitalDoctors: `home/hospitals/${id}/doctors/`,
  singleDoctor: `home/doctors/${id}/`,
  singleDoctorInfo: `home/doctors/${id}/info/`,
  singleDoctorAnswers: `home/doctors/${id}/answers/`,
  addSingleDoctorFav: `home/doctors/${id}/fav`,
  singleDoctorComments: `home/doctors/${id}/comments/`,
  addsingleDoctorComments: 'home/doctors/${id}/comments/new',
});

export const usersApi = {
  register: 'users/register',
  login: 'users/login/',
  changePassword: 'users/change-password/',
  doctorInit: 'users/doctor-init/',
  doctorProfile: 'users/doctor-profile/',
  updateDoctorProfile: 'users/doctor-profile/',
  doctorInfo: 'users/doctor-info/',
  updateDoctorInfo: 'users/doctor-info/',
  patientProfile: 'users/patient/profile/',
  updatePatientProfile: 'users/patient-profile/',
  patientQuestions: 'users/patient/questions/',
  patientFavPosts: 'users/patient/fav-posts/',
  patientFavDoctors: 'users/patient/fav-doctors/',
  patientStarredQuestions: 'users/patient/starred-questions/',
  patientServices: 'users/patient/services/',
};

export const qaApi = {
  questions: 'qa/questions/',
  addQuestion: 'qa/questions/new/',
};

export const qaSingleApi = (id) => ({
  addQuestionImg: `qa/questions/${id}/addimg/`,
  singleQuestion: `qa/questions/${id}/`,
  updateSingleQuestion: `qa/questions/${id}/`,
  singleQuestionAllImg: `qa/questions/${id}/images/`,
  singleQuestionStar: `qa/questions/${id}/star`,
  singleQuestionAnswer: `qa/questions/${id}/answers/`,
  addSingleQuestionAnswers: `qa/questions/${id}/answers/new/`,
  singleAnswer: `qa/answers/${id}/`,
  singleAnswerUpvote: `qa/answers/${id}/upvote/`,
  singleAnswerAllComments: `qa/answers/${id}/comments/`,
  addSingleAnswerComments: `qa/answers/${id}/comments/new`,
});
