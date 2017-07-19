import Immutable from 'immutable';

//import action constants
import { 
  GET_SINGLE_DOCTOR_INFO,
  GET_SINGLE_DOCTOR_INFO_SUCCESS,
  GET_SINGLE_DOCTOR_INFO_ERROR, 

  GET_SINGLE_DOCTOR_ANSWERS,
  GET_SINGLE_DOCTOR_ANSWERS_SUCCESS,
  GET_SINGLE_DOCTOR_ANSWERS_ERROR,

  GET_SINGLE_DOCTOR_COMMENTS,
  GET_SINGLE_DOCTOR_COMMENTS_SUCCESS,
  GET_SINGLE_DOCTOR_COMMENTS_ERROR,
} from '../constants/';

import {
  combine,
  refreshIt,
} from './utils/';


//home reducers
const initialDoctorValue = Immutable.Map({
  doctorInfo: null,
  answers: null,
  comments: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const doctor = (state = initialDoctorValue, action) => {
  switch (action.type) {
    case GET_SINGLE_DOCTOR_INFO:
    case GET_SINGLE_DOCTOR_ANSWERS:
    case GET_SINGLE_DOCTOR_COMMENTS:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case GET_SINGLE_DOCTOR_INFO_SUCCESS:

      const { doctorInfo } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        doctorInfo,
      });
    
    case GET_SINGLE_DOCTOR_ANSWERS_SUCCESS:

      const { answers } = action;

      let oldAnswers = state.get('answers');

      if (answers) {
        answers = Immutable.Map(answers);
      }
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        answers: action.refresh ? refreshIt(oldAnswers, answers) : combine(oldAnswers, answers),
      });


    case GET_SINGLE_DOCTOR_COMMENTS_SUCCESS:

      const { comments } = action;

      let oldComments = state.get('comments');

      if (comments) {
        comments = Immutable.Map(comments);
      }
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        comments: action.refresh ? refreshIt(oldComments, comments) : combine(oldComments, comments),
      });
      
      

    case GET_SINGLE_DOCTOR_INFO_ERROR:
    case GET_SINGLE_DOCTOR_ANSWERS_ERROR:
    case GET_SINGLE_DOCTOR_COMMENTS_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default doctor;