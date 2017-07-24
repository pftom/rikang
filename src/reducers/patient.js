import { List, Map } from 'immutable';
import { REHYDRATE } from 'redux-persist-immutable/constants';

//import action constants
import { 
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  CREATE_SINGLE_QUESTION_SUCCESS,
  DELETE_SINGLE_QUESTION_SUCCESS,

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

  CANCEL_STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION_SUCCESS,
  CANCEL_STAR_SINGLE_QUESTION_ERROR,

  GET_PATIENT_PROFILE,
  GET_PATIENT_PROFILE_ERROR,
  GET_PATIENT_PROFILE_SUCCESS,

  UPDATE_PATIENT_PROFILE,
  UPDATE_PATIENT_PROFILE_SUCCESS,
  UPDATE_PATIENT_PROFILE_ERROR,

  CLEAR_SUBMIT_STATE,

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

  CLEAR_FAV_STATE,
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
  postFetch: null,


  patientProfile: null,
  
  
  questionFav: List([]),

  questionStarredFav: List([]),

  servicesFav: List([]),

  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,

  isStarSingleQuestion: false,
  starSingleQuestionSuccess: false,
  starSingleQuestionError: false,

  isCancelStarSingleQuestion: false,
  cancelStarSingleQuestionSuccess: false,
  cancelStarSingleQuestionError: false,

  isSubmitProfile: false,
  submitProfileError: false,
  submitProfileSuccess: false,
});


//need to be REHYDRATE data in patient
const DATA = [
  'doctorFav',
  'postFav',
  'questionFav',
  'questionStarredFav',
  'servicesFav',
];

const patient = (state = initialPatientValue, action) => {
  switch (action.type) {
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

    case STAR_SINGLE_QUESTION:
    case ADD_SINGLE_DOCTOR_FAV:
    case ADD_SINGLE_POST_FAV:

      return state.merge({
        isStarSingleQuestion: true,
        starSingleQuestionSuccess: false,
        starSingleQuestionError: false,
      });

    case CANCEL_STAR_SINGLE_QUESTION:
    case CANCEL_SINGLE_DOCTOR_FAV:
    case CANCEL_SINGLE_POST_FAV:

      return state.merge({
        isCancelStarSingleQuestion: true,
        cancelStarSingleQuestionSuccess: false,
        cancelStarSingleQuestionError: false,
      })

    case UPDATE_PATIENT_PROFILE:

      return state.merge({
        isSubmitProfile: true,
        submitProfileError: false,
        submitProfileSuccess: false,
      });

    case UPDATE_PATIENT_PROFILE_SUCCESS:

      const { body } = action;
      

      return state.merge({
        isSubmitProfile: false,
        submitProfileSuccess: true,
        patientProfile: {
          ...body,
          id: state.getIn(['patientProfile', 'id']),
        }
      });

    case UPDATE_PATIENT_PROFILE_ERROR:

      return state.merge({
        isSubmitProfile: false,
        submitProfileError: true,
      });
    
    case ADD_SINGLE_DOCTOR_FAV_SUCCESS:

      //add doctor to fav list
      const { doctor } = action;
      return state
            .update('doctorFav', list => list.unshift(doctor))
            .merge({
              isStarSingleQuestion: false,
              starSingleQuestionSuccess: true,
            });

    case CANCEL_SINGLE_DOCTOR_FAV_SUCCESS:

    //delete the post by id
      return state
            .update('doctorFav', list => list.filter(doctor => doctor.get('id') !== action.id))
            .merge({
              isCancelStarSingleQuestion: false,
              cancelStarSingleQuestionSuccess: true,
            });

    case ADD_SINGLE_POST_FAV_SUCCESS:

    //add post to fav list
      const { post } = action;
      return state
            .update('postFav', list => list.unshift(post))
            .merge({
              isStarSingleQuestion: false,
              starSingleQuestionSuccess: true,
            });

    case CANCEL_SINGLE_POST_FAV_SUCCESS:

      //delete the post by id
      return state
            .update('postFav', list => list.filter(post => post.get('id') !== action.id))
            .merge({
              isCancelStarSingleQuestion: false,
              cancelStarSingleQuestionSuccess: true,
            });

    case STAR_SINGLE_QUESTION_SUCCESS:

    //add post to fav list
      const { question } = action;
      return state
            .update('questionStarredFav', list => list.unshift(question))
            .merge({
              isStarSingleQuestion: false,
              starSingleQuestionSuccess: true,
            });

    case CANCEL_STAR_SINGLE_QUESTION_SUCCESS:

      //delete the question by id
      return state
            .update('questionStarredFav', list => list.filter(question => question.get('id') !== action.id))
            .merge({
              isCancelStarSingleQuestion: false,
              cancelStarSingleQuestionSuccess: true,
            });

    case STAR_SINGLE_QUESTION_ERROR:
    
    case ADD_SINGLE_DOCTOR_FAV_ERROR:
    
    case ADD_SINGLE_POST_FAV_ERROR:
    

      return state.merge({
        isStarSingleQuestion: false,
        starSingleQuestionError: true,
      });

    case CANCEL_STAR_SINGLE_QUESTION_ERROR:
    case CANCEL_SINGLE_DOCTOR_FAV_ERROR:
    case CANCEL_SINGLE_POST_FAV_ERROR:

      return state.merge({
        isCancelStarSingleQuestion: false,
        cancelStarSingleQuestionError: true,
      })

    case CREATE_SINGLE_QUESTION_SUCCESS:

    return state
          .update('questionFav', list => list.unshift(Map(action.question)))
          .merge({
            isLoadingData: false,
          })

    case DELETE_SINGLE_QUESTION_SUCCESS:

    return state
          .update('questionFav', list => list.filter(question => question && question.get('id') !== action.id ));

    case GET_PATIENT_PROFILE_SUCCESS:

      const { patientProfile } = action;

      return state.merge({
              patientProfile,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_FAV_DOCTORS_SUCCESS:

      const { patientFavDoctors } = action;

      return state.merge({
              doctorFav: patientFavDoctors,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_FAV_POSTS_SUCCESS:

      const { patientFavPosts } = action;

      let oldPatientFavPosts = state.get('patientFavPosts');

      if (patientFavPosts) {
        patientFavPosts = Map(patientFavPosts);
      }

      const tempFavPosts = action.refresh ? refreshIt(oldPatientFavPosts, patientFavPosts) : combine(oldPatientFavPosts, patientFavPosts);

      return state.merge({
              postFetch: tempFavPosts,
              postFav: tempFavPosts.results,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_QUESTIONS_SUCCESS:

      const { patientQuestions } = action;

      return state.merge({
              questionFav: patientQuestions,
              isLoadingData: false,
              loadingSuccess: true,
            });

    case GET_PATIENT_STARRED_QUESTIONS_SUCCESS:

      const { patientStarredQuestions } = action;

      return state.merge({
              questionStarredFav: patientStarredQuestions,
              isLoadingData: false,
              loadingSuccess: true,
            });
    
    case GET_PATIENT_SERVICES_SUCCESS:

      const { patientServices } = action;

      return state.merge({
              servicesFav: patientServices,
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

            data[key] = (value && value.keySeq().count() > 0 && value.toList().filter(item => item !== null) ) || List([]);
          }
        });

        let newState = state.merge(data);

        console.log('newState', newState.toJS());
        return newState;
      }

      return state;

    case CLEAR_FAV_STATE: 

      return state.merge({
        isStarSingleQuestion: false,
        starSingleQuestionSuccess: false,
        starSingleQuestionError: false,

        isCancelStarSingleQuestion: false,
        cancelStarSingleQuestionSuccess: false,
        cancelStarSingleQuestionError: false,
      });

    case CLEAR_SUBMIT_STATE:

      return state.merge({
        isSubmitProfile: false,
        submitProfileError: false,
        submitProfileSuccess: false,
      })
    
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