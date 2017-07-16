import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getPatientProfile = (state) => state.getIn(['patient', 'patientProfile']);
const getPatientFavPosts = (state) => state.getIn(['patient', 'patientFavPosts']);
const getPatientFavDoctors = (state) => state.getIn(['patient', 'patientFavDoctors']);
const getPatientQuestions = (state) => state.getIn(['patient', 'patientQuestions']);
const getPatientStarredQuestions = (state) => state.getIn(['patient', 'patientStarredQuestions']);
const getPatientServices = (state) => state.getIn(['patient', 'patientServices']);

export const getPatientSelector = createSelector(
  [ getToken, getPatientProfile, getPatientFavPosts, getPatientFavDoctors, getPatientQuestions, getPatientStarredQuestions, getPatientServices ],
  (token, patientProfile, patientFavPosts, patientFavDoctors, patientQuestions, patientStarredQuestions, patientServices) => ({
    token,
    patientProfile,
    patientFavPosts,
    patientFavDoctors,
    patientQuestions,
    patientStarredQuestions,
    patientServices,
  }),
);