import { delay } from 'redux-saga';
import { put, take, call } from 'redux-saga/effects';

//import DOCTORS action constans
import { 
  GET_DOCTORS,
  GET_DOCTORS_ERROR,
  GET_DOCTORS_SUCCESS,
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_ERROR,
  GET_SINGLE_DOCTOR_SUCCESS,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, homeApi, homeSingleApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

function* getSingleDoctor(payload) {
  try {
    const { id, token } = payload;
    const { doctor } = yield call(request.get, base + homeSingleApi(id).singleDoctor, null, token);
    yield put({ type: GET_SINGLE_DOCTOR_SUCCESS, doctor });
  } catch (error) {
    yield put({ type: GET_SINGLE_DOCTOR_ERROR });
  }
}


//LOGIN async actions handle function
function* getDoctors(payload) {
  try {
    const { doctors } = yield call(request.get, base + homeApi.doctors, null, payload);
    yield put({ type: GET_DOCTORS_SUCCESS, payload: doctors });
  } catch(error) {
    yield put({ type: GET_DOCTORS_ERROR });
  }
}

//LOGIN async actions watch function
function* watchGetDoctor() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_DOCTOR);
    // fork return a Task object for cancel later
    yield call(getSingleDoctor, payload);
  }
}

//LOGIN async actions watch function
function* watchGetDoctors() {
  while (true) {
    const { payload } = yield take(GET_DOCTORS);
    // fork return a Task object for cancel later
    yield call(getDoctors, payload);
  }
}




export {
  watchGetDoctor,
  watchGetDoctors,
}