import { List, Map } from 'immutable';

//import action constants
import { 
  GET_SINGLE_QUESTION_ALL_ANSWERS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR,

} from '../constants/';



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
      return state
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
              answers,
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