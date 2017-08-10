import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getPatientProfile = (state) => state.getIn(['patient', 'patientProfile']);
const getPatientFavPosts = (state) => state.getIn(['patient', 'postFav']);
const getPatientFavDoctors = (state) => state.getIn(['patient', 'doctorFav']);
const getPatientQuestions = (state) => state.getIn(['patient', 'questionFav']);
const getPatientStarredQuestions = (state) => state.getIn(['patient', 'questionStarredFav']);
const getPatientServices = (state) => state.getIn(['patient', 'servicesFav']);

const getPatientFetchPosts = (state) => state.getIn(['patient', 'patientPosts']);

const getAllDoctors = (state) => state.getIn(['home', 'doctors']);

const getPatientId = (state) => state.getIn(['auth', 'id']);


//get member ship
const getIsMemberShip = (state) => state.getIn(['service', 'getMemberShip']);
const getIsMemberShipSuccess = (state) => state.getIn(['service', 'getMemberShipSuccess']);
const getIsMemberShipError = (state) => state.getIn(['service', 'getMemberShipError']);
const getMemberShip = (state) => state.getIn(['service', 'membership']);


export const getPatientSelector = createSelector(
  [ getPatientId, getToken, getPatientProfile, getPatientFavPosts, getPatientFavDoctors, getPatientQuestions, getPatientStarredQuestions, getPatientServices, getPatientFetchPosts, getAllDoctors,
    getIsMemberShip,
    getIsMemberShipSuccess,
    getIsMemberShipError,
    getMemberShip,
  ],
  ( userId, token, patientProfile, postFav, doctorFav, questionFav, questionStarredFav, servicesFav, postFetch, doctors,
    getMemberShip,
    getMemberShipSuccess,
    getMemberShipError,
    membership,
  ) => ({
    userId,
    token,
    patientProfile,

    postFav,
    doctorFav,
    questionFav,
    questionStarredFav,
    servicesFav,

    postFetch,
    doctors,

    getMemberShip,
    getMemberShipSuccess,
    getMemberShipError,
    membership,
  }),
);

const getUpdatePatientProfileSuccess = (state) => state.getIn(['patient', 'submitProfileSuccess']);
const getUpdatePatientProfileError = (state) => state.getIn(['patient', 'submitProfileError']);


export const getPatientProfileSelector = createSelector(
  [ getPatientProfile, getUpdatePatientProfileSuccess, getUpdatePatientProfileError ],
  (patientProfile, submitProfileSuccess, submitProfileError) => ({
    patientProfile,
    submitProfileSuccess,
    submitProfileError,
  }),
);

const getIsChangePasswd = (state) => state.getIn(['auth', 'isChangePasswd']);
const getChangePasswdSuccess = (state) => state.getIn(['auth', 'changePasswdSuccess']);
const getChangePasswdError = (state) => state.getIn(['auth', 'changePasswdError']);


export const getChangePasswdSelector = createSelector(
  [ getIsChangePasswd, getChangePasswdSuccess, getChangePasswdError ],
  (isChangePasswd, changePasswdSuccess, changePasswdError) => ({
    isChangePasswd,
    changePasswdSuccess,
    changePasswdError,
  }),
);

const getIsFeedback = (state) => state.getIn(['auth', 'isFeedback']);
const getFeedbackSuccess = (state) => state.getIn(['auth', 'feedbackSuccess']);
const getFeedbackError = (state) => state.getIn(['auth', 'feedbackError']);


export const getFeedbackSelector = createSelector(
  [ getIsFeedback, getFeedbackSuccess, getFeedbackError ],
  (isFeedback, feedbackSuccess, feedbackError) => ({
    isFeedback,
    feedbackSuccess,
    feedbackError,
  }),
);