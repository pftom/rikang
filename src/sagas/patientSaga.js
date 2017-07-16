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

  GET_PATIENT_FAV_DOCTORS,
  GET_PATIENT_FAV_DOCTORS_SUCCESS,
  GET_PATIENT_FAV_DOCTORS_ERROR,

  GET_PATIENT_FAV_POSTS,
  GET_PATIENT_FAV_POSTS_SUCCESS,
  GET_PATIENT_FAV_POSTS_ERROR,

  GET_PATIENT_STARRED_QUESTIONS,
  GET_PATIENT_STARRED_QUESTIONS_SUCCESS,
  GET_PATIENT_STARRED_QUESTIONS_ERROR,

  GET_PATIENT_QUESTIONS,
  GET_PATIENT_QUESTIONS_SUCCESS,
  GET_PATIENT_QUESTIONS_ERROR,

  GET_PATIENT_SERVICES,
  GET_PATIENT_SERVICES_SUCCESS,
  GET_PATIENT_SERVICES_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, usersApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';



function* handleGetSagas({ payload, httpMethod, url, reducerDataIdentifier, successMethod, errorMethod, params }) {
  try {
    const { token } = payload;

    const reducerDataIdentifier = yield call(httpMethod, url, params, token);

    yield put({ type: successMethod, ...{ [reducerDataIdentifier]: reducerDataIdentifier } });

  } catch (error) {

    yield put({ type: errorMethod });
  }
}

function* getPatientProfile(payload) {
  try {
    const { token } = payload;
    const patientProfile = yield call(request.get, base + usersApi.patientProfile, null, token);
    yield put({ type: GET_PATIENT_PROFILE_SUCCESS, patientProfile });
  } catch (error) {
    yield put({ type: GET_PATIENT_PROFILE_ERROR });
  }
}


//PATIENT async actions handle function
function* updatePatientProfile(payload) {
  try {
    const { token, body } = payload;
    //the last param supply multipart/form-data support
    yield call(request.put, base + usersApi.updatePatientProfile, body, token, true);
    yield put({ type: UPDATE_PATIENT_PROFILE_SUCCESS });
  } catch(error) {
    yield put({ type: UPDATE_PATIENT_PROFILE_ERROR });
  }

  return handleGetSagas
}


//PATIENT async actions handle function
function* updatePatientProfile(payload) {
  try {
    const { token, body } = payload;
    //the last param supply multipart/form-data support
    yield call(request.put, base + usersApi.updatePatientProfile, body, token, true);
    yield put({ type: UPDATE_PATIENT_PROFILE_SUCCESS });
  } catch(error) {
    yield put({ type: UPDATE_PATIENT_PROFILE_ERROR });
  }
}




//PATIENT async actions watch function
function* watchGetPatientProfile() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_PROFILE);
    // fork return a Task object for cancel later
    yield call(
      handleGetSagas,
      {
        payload,
        http.get,
        base + usersApi.patientProfile,
        'patientProfile',
        GET_PATIENT_PROFILE_SUCCESS,
        GET_PATIENT_PROFILE_ERROR,
        null,
      }
    );
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