import { delay } from 'redux-saga';
import { put, take, call } from 'redux-saga/effects';

//import HOSPITAL action constans
import { 
  GET_PATIENT_PROFILE,
  GET_PATIENT_PROFILE_SUCCESS,
  GET_PATIENT_PROFILE_ERROR,

  UPDATE_PATIENT_PROFILE,
  UPDATE_PATIENT_PROFILE_SUCCESS,
  UPDATE_PATIENT_PROFILE_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, usersApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

function* getPatientProfile(payload) {
  try {
    const { token } = payload;
    const patientProfile = yield call(request.get, base + usersApi.patientProfile, null, token);
    yield put({ type: GET_PATIENT_PROFILE_SUCCESS, patientProfile });
  } catch (error) {
    yield put({ type: GET_PATIENT_PROFILE_ERROR });
  }
}


//HOSPITAL async actions handle function
function* updatePatientProfile(payload) {
  try {
    const { token, body } = payload;
    //the last param supply multipart/form-data support
    yield call(request.put, base + usersApi.updatePatientProfile, token, body, true);
    yield put({ type: UPDATE_PATIENT_PROFILE_SUCCESS });
  } catch(error) {
    yield put({ type: UPDATE_PATIENT_PROFILE_ERROR });
  }
}

//HOSPITAL async actions watch function
function* watchGetPatientProfile() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_PROFILE);
    // fork return a Task object for cancel later
    yield call(getPatientProfile, payload);
  }
}

//HOSPITAL async actions watch function
function* watchUpdatePatientProfile() {
  while (true) {
    const { payload } = yield take(UPDATE_PATIENT_PROFILE);
    // fork return a Task object for cancel later
    yield call(updatePatientProfile, payload);
  }
}




export {
  watchGetPatientProfile,
  watchUpdatePatientProfile,
}