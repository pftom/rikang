import { List, Map } from 'immutable';

//import action constants
import { 
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,

  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_ERROR,

  GET_SINGLE_QUESTION_ALL_IMG,
  GET_SINGLE_QUESTION_ALL_IMG_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,

} from '../constants/';

//import handle data func
import {
  combine,
  refreshIt,
} from './utils/';


//qa reducers
const initialQaValue = Map({
  questions: null,
  question: null,
  AllImg: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const qa = (state = initialQaValue, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
    case GET_SINGLE_QUESTION:
    case GET_SINGLE_QUESTION_ALL_IMG:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case GET_QUESTIONS_SUCCESS:


    const { questions, refresh } = action.payload;

      let oldQuestions = state.get('questions');

      if (questions) {
        questions = Immutable.Map(questions);
      }

      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        questions: refresh ? refreshIt(oldQuestions, questions) : combine(oldQuestions, questions),
      });

      
    case GET_SINGLE_QUESTION_SUCCESS:

      const { question } = action;
    
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        question,
      });

    
    case GET_SINGLE_QUESTION_ALL_IMG_SUCCESS:

      const { AllImg } = action;

      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        AllImg,
      }) 

    case GET_QUESTIONS_ERROR:
    case GET_SINGLE_QUESTION_ERROR:
    case GET_SINGLE_QUESTION_ALL_IMG_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default qa;