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
    return state.merge({
      isLoadingData: false,
      loadingSuccess: true,
      answers,
    });


    case GET_SINGLE_DOCTOR_COMMENTS_SUCCESS:

        const { comments } = action;
        return state.merge({
          isLoadingData: false,
          loadingSuccess: true,
          comments
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