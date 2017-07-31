import { getInputInitial } from './inputSelector';

import { 
  getHomeSelector, 
  getPostSelector,

} from './TabOneMainSelector';

import {
  getHospitalsSelector,
  getHospitalSelector,
  getHospitalDoctorsSelector,
} from './hospitalSelector';

import {
  getDoctorSelector,
  getDoctorInfoSelector, 
  getDoctorsSelector,
} from './doctorSelector';

import {
  getPatientSelector,
  getPatientProfileSelector,

  getChangePasswdSelector,
} from './userSelector';

import {
  getQaSelector,
  getSingleQaSelector,
  getQuestionFavSelector,
  getQuestionListSelector,
} from './qaSelector';

import {
  getAnswerCommentSelector,
} from './answerSelector.js';

import {
  getQuestionStatusSelector,
} from './PutQuestionSelector.js';

export {
  getInputInitial,

  getHomeSelector,
  
  getPostSelector,
  getDoctorsSelector,

  getHospitalsSelector,
  getHospitalSelector,
  getHospitalDoctorsSelector,

  getDoctorSelector,
  getDoctorInfoSelector,

  getPatientSelector,
  getPatientProfileSelector,
  getChangePasswdSelector,

  getQaSelector,
  getSingleQaSelector,
  getQuestionFavSelector,
  getQuestionListSelector,

  getAnswerCommentSelector,
  getQuestionStatusSelector,

}