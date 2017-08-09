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

  STAR_SINGLE_QUESTION_SUCCESS,
  CANCEL_STAR_SINGLE_QUESTION_SUCCESS,

  CREATE_SINGLE_QUESTION,
  CREATE_SINGLE_QUESTION_SUCCESS,
  CREATE_SINGLE_QUESTION_ERROR,

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
  isAddQuestion: false,
  addQuestionSuccess: false,
  addQuestionError: false,
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

    case CREATE_SINGLE_QUESTION:

      return state.merge({
        isAddQuestion: true,
        addQuestionSuccess: false,
        addQuestionError: false,
      })

    case CREATE_SINGLE_QUESTION_SUCCESS:

      return state.merge({
        isAddQuestion: false,
        addQuestionSuccess: true,
        addQuestionError: false,
      });

    case CREATE_SINGLE_QUESTION_ERROR:

      return state.merge({
        isAddQuestion: false,
        addQuestionSuccess: false,
        addQuestionError: true,
      });
    
    case GET_QUESTIONS_SUCCESS:


    const { questions, refresh } = action;

      let oldQuestions = state.get('questions');

      if (questions) {
        questions = Map(questions);
      }

      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        questions: refresh ? refreshIt(oldQuestions, questions) : combine(oldQuestions, questions),
      });

    case STAR_SINGLE_QUESTION_SUCCESS:


      return state.updateIn(['questions', 'results'], list => {
        return list.map(item => {
          if (item.get('id') === action.id) {
            return item.update('stars', stars => stars + 1);
          }
          return item;
        })
      })

    case CANCEL_STAR_SINGLE_QUESTION_SUCCESS:
    if (state.get('questions')) {
      return state.updateIn(['questions', 'results'], list => {
        return list.map(item => {
          if (item.get('id') === action.id) {
            return item.update('stars', stars => stars - 1);
          }
          return item;
        })
      })
    } else {
      return state;
    }

      
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