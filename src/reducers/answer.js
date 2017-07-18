import { List, Map } from 'immutable';

//import action constants
import { 
  GET_SINGLE_QUESTION_ALL_ANSWERS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR,

} from '../constants/';

//import handle func for computing data
import {
  combine,
  refreshIt,
} from './utils/';

//home reducers
const initialAnswerValue = Map({
  answers: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const answer = (state = initialAnswerValue, action) => {
  switch (action.type) {
    case GET_SINGLE_QUESTION_ALL_ANSWERS:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS:

      const { answers } = action;

      let oldAnswers = state.get('answers');

      if (answers) {
        answers = Map(answers);
      }
      return state
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
              answers: action.refresh ? refreshIt(oldAnswers, answers) : combine(oldAnswers, answers),
            })



    case GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default answer;