import { delay } from 'redux-saga';
import { put, take, call } from 'redux-saga/effects';

//import HOSPITAL action constans
import { 
  GET_HOSPITALS,
  GET_HOSPITALS_ERROR,
  GET_HOSPITALS_SUCCESS,

  GET_SINGLE_HOSPITAL,
  GET_SINGLE_HOSPITAL_ERROR,
  GET_SINGLE_HOSPITAL_SUCCESS,

  GET_SINGLE_HOSPITAL_DOCTORS,
  GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS,
  GET_SINGLE_HOSPITAL_DOCTORS_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, homeApi, homeSingleApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

function* getSingleHospital(payload) {
  try {
    const { id, token } = payload;
    const hospital = yield call(request.get, base + homeSingleApi(id).singleHospital, null, token);
    yield put({ type: GET_SINGLE_HOSPITAL_SUCCESS, hospital });
  } catch (error) {
    yield put({ type: GET_SINGLE_HOSPITAL_ERROR });
  }
}


//HOSPITAL async actions handle function
function* getHospitals(payload) {
  try {
    const { token } = payload;
    const hospitals = yield call(request.get, base + homeApi.hospitals, null, token);
    yield put({ type: GET_HOSPITALS_SUCCESS, hospitals });
  } catch(error) {
    yield put({ type: GET_HOSPITALS_ERROR });
  }
}

function* getSingleHospitalDoctors(payload) {
  try {
    const { token, id, refresh } = payload;
    const query = (!refresh && payload.query) || null;
    const hospitalDoctors = yield call(request.get, base + homeSingleApi(id).singleHospitalDoctors, query, token);
    yield put({ type: GET_SINGLE_HOSPITAL_DOCTORS_SUCCESS, hospitalDoctors, refresh });
  } catch(error) {
    yield put({ type: GET_SINGLE_HOSPITAL_DOCTORS_ERROR });
  }
}

//HOSPITAL async actions watch function
function* watchGetHospital() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_HOSPITAL);
    // fork return a Task object for cancel later
    yield call(getSingleHospital, payload);
  }
}

//HOSPITAL async actions watch function
function* watchGetHospitals() {
  while (true) {
    const { payload } = yield take(GET_HOSPITALS);
    // fork return a Task object for cancel later
    yield call(getHospitals, payload);
  }
}

function* watchGetHospitalDoctors() {
  while(true) {
    const { payload } = yield take(GET_SINGLE_HOSPITAL_DOCTORS);
    yield call(getSingleHospitalDoctors, payload);
  }
}




export {
  watchGetHospital,
  watchGetHospitals,
  watchGetHospitalDoctors,
}