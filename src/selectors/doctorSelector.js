import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

//doctor selector
const getDoctor = (state) => state.getIn(['home', 'doctor']);
const getDoctorAnswers = (state) => state.getIn(['doctor', 'answers']);
const getDoctorComments = (state) => state.getIn(['doctor', 'comments']);

export const getDoctorSelector = createSelector(
  [ getDoctor, getDoctorAnswers, getDoctorComments ],
  (doctor, answers, comments) => ({
    doctor,
    answers,
    comments,
  }),
);

const getDoctorInfo = (state) => state.getIn(['doctor', 'doctorInfo']);

export const getDoctorInfoSelector = createSelector(
  [ getDoctorInfo ],
  (doctorInfo) => ({
    doctorInfo,
  }),
);