import Immutable from 'immutable';

//import single action constants
import {
  GET_HOSPITALS,
  GET_HOSPITALS_SUCCESS,
  GET_HOSPITALS_ERROR,

  GET_SINGLE_HOSPITAL,
  GET_SINGLE_HOSPITAL_SUCCESS,
  GET_SINGLE_HOSPITAL_ERROR,

  GET_SINGLE_HOSPITAL_DOCTORS,
  GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS,
  GET_SINGLE_HOSPITAL_DOCTORS_ERROR,
} from '../constants/'


//home single reducers
const initialHospitalValue = Immutable.Map({
  hospitals: null,
  hospital: null,
  hospitalDoctors: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

const hospitalValue = (state = initialHospitalValue, action) => {
    switch (action.type) {
      case GET_HOSPITALS:
      case GET_SINGLE_HOSPITAL:
      case GET_SINGLE_HOSPITAL_DOCTORS:

        return state.merge({
          isLoadingData: true,
          loadingError: false,
          loadingSuccess: false,
        });
      
      case GET_HOSPITALS_SUCCESS:

        const { hospitals } = action;
        return state.merge({
          isLoadingData: false,
          loadingSuccess: true,
          hospitals,
        });
      
      case GET_SINGLE_HOSPITAL_SUCCESS:

      const { hospital } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        hospital,
      });

      case GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS:

      const { hospitalDoctors } = action;
      return state.merge({
        isLoadingData: false,
        loadingSuccess: true,
        hospitalDoctors,
      });
        

      case GET_HOSPITALS_ERROR:
      case GET_SINGLE_HOSPITAL_ERROR:
      case GET_SINGLE_HOSPITAL_DOCTORS_ERROR:

        return state.merge({
          isLoadingData: false,
          loadingError: true,
        });

      default:
        return state;
  }
};

export default hospitalValue;