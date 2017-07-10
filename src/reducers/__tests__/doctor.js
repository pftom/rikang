import Immutable from 'immutable';

//import test reducer
import doctor from '../doctor';


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
} from '../../constants/'

const initialDoctorValue = Immutable.Map({
  doctorInfo: null,
  answers: null,
  comments: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});


//test singleQA action
const getDoctorInfoAction = {
  type: GET_SINGLE_DOCTOR_INFO,
};

const getDoctorInfoSuccessAction = {
  type: GET_SINGLE_DOCTOR_INFO_SUCCESS,
  doctorInfo: {}
}

const getDoctorInfoErrorAction = {
  type: GET_SINGLE_DOCTOR_INFO_ERROR,
}

const getDoctorAnswersAction = {
  type: GET_SINGLE_DOCTOR_ANSWERS,
};

const getDoctorAnswersSuccessAction = {
  type: GET_SINGLE_DOCTOR_ANSWERS_SUCCESS,
  answers: {},
};

const getDoctorAnswersErrorAction = {
  type: GET_SINGLE_DOCTOR_ANSWERS_ERROR,
};

const getDoctorCommentsAction = {
  type: GET_SINGLE_DOCTOR_COMMENTS,
};

const getDoctorCommentsSuccessAction = {
  type: GET_SINGLE_DOCTOR_COMMENTS_SUCCESS,
  comments: {},
};

const getDoctorCommentsErrorAction = {
  type: GET_SINGLE_DOCTOR_COMMENTS_ERROR,
};

test('the answer reducer work as well', () => {
  //test doctor info
  expect(doctor(initialDoctorValue, getDoctorInfoAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorInfoSuccessAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorInfoErrorAction)).toMatchSnapshot();

  //test answers
  expect(doctor(initialDoctorValue, getDoctorAnswersAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorAnswersSuccessAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorAnswersErrorAction)).toMatchSnapshot();

  //test comments
  expect(doctor(initialDoctorValue, getDoctorCommentsAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorCommentsSuccessAction)).toMatchSnapshot();
  expect(doctor(initialDoctorValue.merge({ isLoadingData: true }), getDoctorCommentsErrorAction)).toMatchSnapshot();
})