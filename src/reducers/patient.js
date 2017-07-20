import { List, Map } from 'immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';

//import action constants
import { 
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  CANCEL_SINGLE_DOCTOR_FAV,
  CANCEL_SINGLE_DOCTOR_FAV_SUCCESS,
  CANCEL_SINGLE_DOCTOR_FAV_ERROR,

  ADD_SINGLE_POST_FAV,
  ADD_SINGLE_POST_FAV_SUCCESS,
  ADD_SINGLE_POST_FAV_ERROR,

  CANCEL_SINGLE_POST_FAV,
  CANCEL_SINGLE_POST_FAV_SUCCESS,
  CANCEL_SINGLE_POST_FAV_ERROR,

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
  doctorFav: List([
    1,
  ]),
  patientFetchFavDoctors: null,

  postFav: List([]),
  patientFetchFavPosts: null,

  patientProfile: null,
  
  
  patientQuestions: List([]),
  patientFetchQuestions: null,

  patientStarredQuestions: List([]),
  patientFetchStarredQuestions: null,

  patientServices: List([]),
  patientFetchServices: null,

  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});


//need to be REHYDRATE data in patient
const DATA = [
  'doctorFav',
  'postFav',
  'patientQuestions',
  'patientStarredQuestions',
  'patientServices',
];

const patient = (state = initialPatientValue, action) => {
  switch (action.type) {
    case ADD_SINGLE_DOCTOR_FAV:
    case CANCEL_SINGLE_DOCTOR_FAV:
    case ADD_SINGLE_POST_FAV:
    case CANCEL_SINGLE_POST_FAV:
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

      //add doctor to fav list
      const { doctor } = action;
      return state
            .update('doctorFav', list => list.unshift(doctor))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });

    case CANCEL_SINGLE_DOCTOR_FAV_SUCCESS:

    //delete the post by id
      return state
            .update('doctorFav', list => list.filter(doctor => doctor.get('id') !== action.id))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });

    case ADD_SINGLE_POST_FAV_SUCCESS:

    //add post to fav list
      const { post } = action;
      return state
            .update('postFav', list => list.unshift(post))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });

    case CANCEL_SINGLE_POST_FAV_SUCCESS:

      //delete the post by id
      return state
            .update('postFav', list => list.filter(post => post.get('id') !== action.id))
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
      console.log('patientFavDoctors', patientFavDoctors);

      return state.merge({
              patientFavDoctors,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_FAV_POSTS_SUCCESS:

      const { patientFavPosts } = action;
      console.log('patientFavPosts', patientFavPosts);

      let oldPatientFavPosts = state.get('patientFavPosts');

      if (patientFavPosts) {
        patientFavPosts = Map(patientFavPosts);
      }

      return state.merge({
              patientFavPosts: action.refresh ? refreshIt(oldPatientFavPosts, patientFavPosts) : combine(oldPatientFavPosts, patientFavPosts),
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_QUESTIONS_SUCCESS:

      const { patientQuestions } = action;
      console.log('patientQuestions', patientQuestions);

      return state.merge({
              patientQuestions,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_STARRED_QUESTIONS_SUCCESS:

      const { patientStarredQuestions } = action;
      console.log('patientStarredQuestions', patientStarredQuestions);

      return state.merge({
              patientStarredQuestions,
              isLoadingData: false,
              loadingSuccess: true,
            });
    
    case GET_PATIENT_SERVICES_SUCCESS:

      const { patientServices } = action;
      console.log('patientServices', patientServices);

      return state.merge({
              patientServices,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case REHYDRATE: 

      const { auth, patient } = action.payload;
      const token = auth && auth.has('token') && auth.get('token');


      if (token) {
        const data = {};
        console.log('patient', patient.toJS());
        patient.mapEntries(([key, value]) => {
          if (DATA.includes(key)) {

            data[key] = (value && value.keySeq().count() > 0 && value.toList() ) || List([]);
          }
        });
        console.log('state', data);

        let newState = state.merge(data);

        console.log('newState', newState.toJS());
        return newState;
      }

      return state;

    case ADD_SINGLE_DOCTOR_FAV_ERROR:
    case CANCEL_SINGLE_DOCTOR_FAV_ERROR:
    case ADD_SINGLE_POST_FAV_ERROR:
    case CANCEL_SINGLE_POST_FAV_ERROR:
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