import Immutable from 'immutable';

//import single action constants
import {
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_SUCCESS,
  GET_SINGLE_DOCTOR_ERROR,

  GET_SINGLE_POST,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
} from '../constants/'


//home single reducers
const initialHomeSingleValue = Immutable.Map({
  doctor: null,
  post: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const homeSingle = (state = initialHomeSingleValue, action) => {
    switch (action.type) {
      case GET_SINGLE_POST:
      case GET_SINGLE_DOCTOR:

        return state.merge({
          isLoadingData: true,
          loadingError: false,
          loadingSuccess: false,
        });
      
      case GET_SINGLE_DOCTOR_SUCCESS:

        const { doctor } = action;
        return state.merge({
          isLoadingData: false,
          loadingSuccess: true,
          doctor
        });
      
      case GET_SINGLE_POST_SUCCESS:

      const { post } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        post,
      });
        

      case GET_SINGLE_DOCTOR_ERROR:
      case GET_SINGLE_POST_ERROR:

        return state.merge({
          isLoadingData: false,
          loadingError: true,
        });
      default:
        return state;
  }
};

export default homeSingle;