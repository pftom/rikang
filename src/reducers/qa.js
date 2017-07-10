import { List, Map } from 'immutable';

//import action constants
import { 
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,

} from '../constants/';



//home reducers
const initialQaValue = Map({
  questions: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const qa = (state = initialQaValue, action) => {
  switch (action.type) {
    case GET_QUESTIONS:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case GET_QUESTIONS_SUCCESS:

      const { questions } = action;
      
      if (!state.get('questions')) {
        return state.merge({
          questions,
        });
      }

      let oldQuestions = state.getIn(['questions', 'results']);
      return state
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
              questions,
            })
            .updateIn(['questions', 'results'], list => list.concat(oldQuestions));
      

    case GET_QUESTIONS_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default qa;