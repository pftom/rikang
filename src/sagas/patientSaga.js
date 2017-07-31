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

    const { name, avatar, age, sex, medical_history } = body;
    let data = new FormData();
    let keys = Object.keys(body);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'avatar') {
        data.append('avatar', { uri: avatar, type: 'multipart/form-data', name: 'image.jpg'})
      } else {
        data.append(keys[i], body[keys[i]]);
      }
    }
    //the last param supply multipart/form-data support
    yield call(request.put, base + usersApi.updatePatientProfile, token, data, true);
    yield put({ type: UPDATE_PATIENT_PROFILE_SUCCESS, body });
  } catch(error) {
    yield put({ type: UPDATE_PATIENT_PROFILE_ERROR, error });
  }
}

//get patient fav posts
function* getPatientFavPosts(payload) {
  try {
    const { token, refresh } = payload;
    const patientFavPosts = yield call(request.get, base + usersApi.patientFavPosts, null, token);
    yield put({ type: GET_PATIENT_FAV_POSTS_SUCCESS, patientFavPosts, refresh });
  } catch (error) {
    yield put({ type: GET_PATIENT_FAV_POSTS_ERROR });
  }
}

//get patient fav doctors
function* getPatientFavDoctors(payload) {
  try {
    const { token } = payload;
    const patientFavDoctors = yield call(request.get, base + usersApi.patientFavDoctors, null, token);
    yield put({ type: GET_PATIENT_FAV_DOCTORS_SUCCESS, patientFavDoctors });
  } catch (error) {
    yield put({ type: GET_PATIENT_FAV_DOCTORS_ERROR });
  }
}

  //get patient fav doctors
function* getPatientQuestions(payload) {
  try {
    const { token } = payload;
    const patientQuestions = yield call(request.get, base + usersApi.patientQuestions, null, token);
    yield put({ type: GET_PATIENT_QUESTIONS_SUCCESS, patientQuestions });
  } catch (error) {
    yield put({ type: GET_PATIENT_QUESTIONS_ERROR });
  }
}

  //get patient starred questions
function* getPatientStarredQuestions(payload) {
  try {
    const { token } = payload;
    const patientStarredQuestions = yield call(request.get, base + usersApi.patientStarredQuestions, null, token);
    yield put({ type: GET_PATIENT_STARRED_QUESTIONS_SUCCESS, patientStarredQuestions });
  } catch (error) {
    yield put({ type: GET_PATIENT_STARRED_QUESTIONS_ERROR });
  }
}



  //get patient services
function* getPatientServices(payload) {
  try {
    const { token } = payload;
    const patientServices = yield call(request.get, base + usersApi.patientServices, null, token);
    yield put({ type: GET_PATIENT_SERVICES_SUCCESS, patientServices });
  } catch (error) {
    yield put({ type: GET_PATIENT_SERVICES_ERROR });
  }
}




//patient async actions watch function
function* watchGetPatientProfile() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_PROFILE);
    // fork return a Task object for cancel later
    yield call(getPatientProfile, payload);
  }
}

//patient async actions watch function
function* watchUpdatePatientProfile() {
  while (true) {
    const { payload } = yield take(UPDATE_PATIENT_PROFILE);
    // fork return a Task object for cancel later
    yield call(updatePatientProfile, payload);
  }
}

//patient async actions watch function
function* watchGetPatientFavPosts() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_FAV_POSTS);
    // fork return a Task object for cancel later
    yield call(getPatientFavPosts, payload);
  }
}

//patient async actions watch function
function* watchGetPatientFavDoctors() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_FAV_DOCTORS);
    // fork return a Task object for cancel later
    yield call(getPatientFavDoctors, payload);
  }
}

//patient async actions watch function
function* watchGetPatientQuestions() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_QUESTIONS);
    // fork return a Task object for cancel later
    yield call(getPatientQuestions, payload);
  }
}

//patient async actions watch function
function* watchGetPatientStarredQuestions() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_STARRED_QUESTIONS);
    // fork return a Task object for cancel later
    yield call(getPatientStarredQuestions, payload);
  }
}

//patient async actions watch function
function* watchGetPatientServices() {
  while (true) {
    const { payload } = yield take(GET_PATIENT_SERVICES);
    // fork return a Task object for cancel later
    yield call(getPatientServices, payload);
  }
}





export {
  watchGetPatientProfile,
  watchUpdatePatientProfile,
  watchGetPatientFavDoctors,
  watchGetPatientFavPosts,
  watchGetPatientQuestions,
  watchGetPatientServices,
  watchGetPatientStarredQuestions
}