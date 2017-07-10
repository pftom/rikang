import Immutable from 'immutable';

import hospital from '../hospital';

//import single action constants
import {
  GET_HOSPITALS,
  GET_HOSPITALS_SUCCESS,
  GET_HOSPITALS_ERROR,

  GET_SINGLE_HOSPITAL,
  GET_SINGLE_HOSPITAL_SUCCESS,
  GET_SINGLE_HOSPITAL_ERROR,

  GET_SINGLE_HOSPITAL_DOCTORS,
  GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS,
  GET_SINGLE_HOSPITAL_DOCTORS_ERROR,
} from '../../constants/';


//get hospitals
const getHospitalsAction = {
  type: GET_HOSPITALS,
};

const getHospitalsSuccessAction = {
  type: GET_HOSPITALS_SUCCESS,
  hospitals: {},
};

const getHospitalsErrorAction = {
  type: GET_HOSPITALS_ERROR,
};

//get single hospital
const getSingleHospitalAction = {
  type: GET_SINGLE_HOSPITAL,
};

const getSingleHospitalSuccessAction = {
  type: GET_SINGLE_HOSPITAL_SUCCESS,
  hospital: {},
};

const getSingleHospitalErrorAction = {
  type: GET_SINGLE_HOSPITAL_ERROR,
};

//get posts
const getSingleHospitalDoctorsAction = {
  type: GET_SINGLE_HOSPITAL_DOCTORS,
};

const getSingleHospitalDoctorsSuccessAction = {
  type: GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS,
  hospitalDoctors: {},
};

const getSingleHospitalDoctorsErrorAction = {
  type: GET_SINGLE_HOSPITAL_DOCTORS_ERROR,
};


//home single reducers
const initialHospitalValue = Immutable.Map({
  hospitals: null,
  hospital: null,
  hospitalDoctors: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

test('the hospital reducer work as well', () => {
  //test hospitals
  expect(hospital(initialHospitalValue, getHospitalsAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getHospitalsSuccessAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getHospitalsErrorAction)).toMatchSnapshot();

  //test hospital
  expect(hospital(initialHospitalValue, getSingleHospitalAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getSingleHospitalSuccessAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getSingleHospitalErrorAction)).toMatchSnapshot();

  //test hospital doctors
  expect(hospital(initialHospitalValue, getSingleHospitalDoctorsAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getSingleHospitalDoctorsSuccessAction)).toMatchSnapshot();
  expect(hospital(initialHospitalValue.merge({ isLoadingData: true }), getSingleHospitalDoctorsErrorAction)).toMatchSnapshot();

});