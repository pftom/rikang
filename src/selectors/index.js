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
} from './userSelector';

import {
  getQaSelector,
  getSingleQaSelector,
  getQuestionFavSelector,
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

  getQaSelector,
  getSingleQaSelector,
  getQuestionFavSelector,

  getAnswerCommentSelector,
  getQuestionStatusSelector,
}