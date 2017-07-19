import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';
import { getDoctors } from './TabOneMainSelector';

//doctor selector
const getDoctor = (state) => state.getIn(['home', 'doctor']);
const getDoctorAnswers = (state) => state.getIn(['doctor', 'answers']);
const getDoctorComments = (state) => state.getIn(['doctor', 'comments']);
const getFavDoctors = (state) => state.getIn(['patient', 'doctorFav']);

export const getDoctorSelector = createSelector(
  [ getDoctor, getDoctorAnswers, getDoctorComments, getFavDoctors ],
  (doctor, answers, comments, doctorFav) => ({
    doctor,
    answers,
    comments,
    doctorFav,
  }),
);

const getDoctorInfo = (state) => state.getIn(['doctor', 'doctorInfo']);

export const getDoctorInfoSelector = createSelector(
  [ getDoctorInfo ],
  (doctorInfo) => ({
    doctorInfo,
  }),
);


export const getDoctorsSelector = createSelector(
  [ getDoctors ],
  (doctors) => ({
    doctors,
  }),
);