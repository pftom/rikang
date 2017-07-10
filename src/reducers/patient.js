import { List, Map } from 'immutable';

//import action constants
import { 
  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,
} from '../constants/';



//home reducers
const initialFavValue = Map({
  doctorFavs: List([]),
  postFavs: List([]),
  solvedProblems: List([]),
  unsolvedProblems: List([]),
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const fav = (state = initialFavValue, action) => {
  switch (action.type) {
    case ADD_SINGLE_DOCTOR_FAV:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case ADD_SINGLE_DOCTOR_FAV_SUCCESS:

      const { doctor } = action;
      return state
            .update('doctorFavs', list => list.shift(doctor))
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
            });
      

    case ADD_SINGLE_DOCTOR_FAV_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default fav;