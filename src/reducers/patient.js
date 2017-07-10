import { List, Map } from 'immutable';

//import action constants
import { 
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  STAR_SINGLE_QUESTION,
  STAR_SINGLE_QUESTION_SUCCESS,
  STAR_SINGLE_QUESTION_ERROR,
} from '../constants/';



//home reducers
const initialPatientValue = Map({
  doctorFav: List([]),
  postFav: List([]),
  questionStar: List([]),
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const fav = (state = initialPatientValue, action) => {
  switch (action.type) {
    case ADD_SINGLE_DOCTOR_FAV:
    case STAR_SINGLE_QUESTION:

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
      console.log('question', question);

      return state
            .update('questionStar', list => list.unshift(question))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });

    case ADD_SINGLE_DOCTOR_FAV_ERROR:
    case STAR_SINGLE_QUESTION_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default fav;