import { List, Map } from 'immutable';

//import action constants
import { 
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  STAR_SINGLE_QUESTION,
  STAR_SINGLE_QUESTION_SUCCESS,
  STAR_SINGLE_QUESTION_ERROR,

  GET_PATIENT_PROFILE,
  GET_PATIENT_PROFILE_ERROR,
  GET_PATIENT_PROFILE_SUCCESS,

  GET_PATIENT_FAV_DOCTORS,
  GET_PATIENT_FAV_DOCTORS_SUCCESS,
  GET_PATIENT_FAV_DOCTORS_ERROR,

  GET_PATIENT_FAV_POSTS,
  GET_PATIENT_FAV_POSTS_SUCCESS,
  GET_PATIENT_FAV_POSTS_ERROR,

  GET_PATIENT_QUESTIONS,
  GET_PATIENT_QUESTIONS_SUCCESS,
  GET_PATIENT_QUESTIONS_ERROR,

  GET_PATIENT_SERVICES,
  GET_PATIENT_SERVICES_SUCCESS,
  GET_PATIENT_SERVICES_ERROR,

  GET_PATIENT_STARRED_QUESTIONS,
  GET_PATIENT_STARRED_QUESTIONS_SUCCESS,
  GET_PATIENT_STARRED_QUESTIONS_ERROR,
} from '../constants/';

//import util for update data
import {
  refreshIt,
  combine,
} from './utils/'

//home reducers
const initialPatientValue = Map({
  doctorFav: List([]),
  postFav: List([]),
  questionStar: List([]),
  patientProfile: null,
  patientFavPosts: null,
  patientFavDoctors: null,
  patientQuestions: null,
  patientStarredQuestions: null,
  patientServices: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const patient = (state = initialPatientValue, action) => {
  switch (action.type) {
    case ADD_SINGLE_DOCTOR_FAV:
    case STAR_SINGLE_QUESTION:
    case GET_PATIENT_PROFILE:
    case GET_PATIENT_FAV_DOCTORS:
    case GET_PATIENT_FAV_POSTS:
    case GET_PATIENT_QUESTIONS:
    case GET_PATIENT_STARRED_QUESTIONS:
    case GET_PATIENT_SERVICES:


      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case ADD_SINGLE_DOCTOR_FAV_SUCCESS:

      const { doctor } = action;
      return state
            .update('doctorFav', list => list.unshift(doctor))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });
      
    case STAR_SINGLE_QUESTION_SUCCESS:

      const { question } = action;

      return state
            .update('questionStar', list => list.unshift(question))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_PROFILE_SUCCESS:

      const { patientProfile } = action;

      return state.merge({
              patientProfile,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_FAV_DOCTORS_SUCCESS:

      const { patientFavDoctors } = action;

      let oldPatientFavDoctors = state.get('patientFavDoctors');

      if (patientFavDoctors) {
        patientFavDoctors = Immutable.Map(patientFavDoctors);
      }

      return state.merge({
              patientFavDoctors: action.refresh ? refreshIt(oldPatientFavDoctors, patientFavDoctors) : combine(oldPatientFavDoctors, patientFavDoctors),
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_FAV_POSTS_SUCCESS:

      const { patientFavPosts } = action;

      let oldPatientFavPosts = state.get('patientFavPosts');

      if (patientFavPosts) {
        patientFavPosts = Immutable.Map(patientFavPosts);
      }

      return state.merge({
              patientFavPosts: action.refresh ? refreshIt(oldPatientFavPosts, patientFavPosts) : combine(oldPatientFavPosts, patientFavPosts),
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_QUESTIONS_SUCCESS:

      const { patientQuestions } = action;

      let oldPatientQuestions = state.get('patientQuestions');

      if (patientQuestions) {
        patientQuestions = Immutable.Map(patientQuestions);
      }

      return state.merge({
              patientQuestions: action.refresh ? refreshIt(oldPatientQuestions, patientQuestions) : combine(oldPatientQuestions, patientQuestions),
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_STARRED_QUESTIONS_SUCCESS:

      const { patientStarredQuestions } = action;

      let oldPatientStarredQuestions = state.get('patientStarredQuestions');

      if (patientStarredQuestions) {
        patientStarredQuestions = Immutable.Map(patientStarredQuestions);
      }

      return state.merge({
              patientStarredQuestions: action.refresh ? refreshIt(oldPatientStarredQuestions, patientStarredQuestions) : combine(oldPatientStarredQuestions, patientStarredQuestions),
              isLoadingData: false,
              loadingSuccess: true,
            });
    
    case GET_PATIENT_SERVICES_SUCCESS:

      const { patientServices } = action;

      let oldPatientServices = state.get('patientServices');

      if (patientServices) {
        patientServices = Immutable.Map(patientServices);
      }

      return state.merge({
              patientServices: action.refresh ? refreshIt(oldPatientServices, patientServices) : combine(oldPatientServices, patientServices),
              isLoadingData: false,
              loadingSuccess: true,
            });

    case ADD_SINGLE_DOCTOR_FAV_ERROR:
    case STAR_SINGLE_QUESTION_ERROR:
    case GET_PATIENT_FAV_DOCTORS_ERROR:
    case GET_PATIENT_FAV_POSTS_ERROR:
    case GET_PATIENT_QUESTIONS_ERROR:
    case GET_PATIENT_STARRED_QUESTIONS_ERROR:
    case GET_PATIENT_SERVICES_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default patient;