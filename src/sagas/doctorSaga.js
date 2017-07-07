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

  GET_SINGLE_DOCTOR_INFO,
  GET_SINGLE_DOCTOR_INFO_SUCCESS,
  GET_SINGLE_DOCTOR_INFO_ERROR,

  GET_SINGLE_DOCTOR_ANSWERS,
  GET_SINGLE_DOCTOR_ANSWERS_SUCCESS,
  GET_SINGLE_DOCTOR_ANSWERS_ERROR,

  ADD_SINGLE_DOCTOR_FAV,
  ADD_SINGLE_DOCTOR_FAV_SUCCESS,
  ADD_SINGLE_DOCTOR_FAV_ERROR,

  GET_SINGLE_DOCTOR_COMMENTS,
  GET_SINGLE_DOCTOR_COMMENTS_SUCCESS,
  GET_SINGLE_DOCTOR_COMMENTS_ERROR,

} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, homeApi, homeSingleApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

//get single doctor data
function* getSingleDoctor(payload) {
  try {
    const { id, token } = payload;
    //emit http get, fetch single doctor
    const doctor = yield call(request.get, base + homeSingleApi(id).singleDoctor, null, token);
    //get doctor success
    yield put({ type: GET_SINGLE_DOCTOR_SUCCESS, doctor });
  } catch (error) {
    //get doctor error
    yield put({ type: GET_SINGLE_DOCTOR_ERROR });
  }
}

//get single doctor info
function* getSingleDoctorInfo() {
  try {
    const { id, token } = payload;
    //emit http get, fetch single doctor info
    const info = yield call(request.get, base + homeSingleApi(id).singleDoctorInfo, null, token);
    //get doctor info success 
    yield put({ type: GET_SINGLE_DOCTOR_INFO_SUCCESS, info });
  } catch (error) {
    //get doctor info error
    yield put({ type: GET_SINGLE_DOCTOR_INFO_ERROR });
  }
}

//get single doctor all answers
function* getSingleDoctorAnswers() {
  try {
    const { id, token } = payload;
    //emit http get, fetch single doctor info
    const answers = yield call(request.get, base + homeSingleApi(id).singleDoctorAnswers, null, token);
    //get doctor answers success 
    yield put({ type: GET_SINGLE_DOCTOR_ANSWERS_SUCCESS, answers });
  } catch (error) {
    //get answers info error
    yield put({ type: GET_SINGLE_DOCTOR_ANSWERS_ERROR });
  }
}

function* addSingleDoctorFav() {
  try {
    const { id, token } = payload;
    //emit http get, fetch single doctor fav
    yield call(request.get, base + homeSingleApi(id).addSingleDoctorFav, null, token);
    //get doctor fav success 
    yield put({ type: ADD_SINGLE_DOCTOR_FAV_SUCCESS });
  } catch (error) {
    //get fav info error
    yield put({ type: ADD_SINGLE_DOCTOR_FAV_ERROR });
  }
}

function* getSingleDoctorComments() {
  try {
    const { id, token } = payload;
    //emit http get, fetch single doctor comment
    const comments = yield call(request.get, base + homeSingleApi(id).singleDoctorComments, null, token);
    //get doctor comments success 
    yield put({ type: GET_SINGLE_DOCTOR_COMMENTS_SUCCESS, comments });
  } catch (error) {
    //get comments error
    yield put({ type: GET_SINGLE_DOCTOR_COMMENTS_ERROR });
  }
}


//DOCTORS async actions handle function
function* getDoctors(payload) {
  try {
    const { doctors } = yield call(request.get, base + homeApi.doctors, null, payload);
    yield put({ type: GET_DOCTORS_SUCCESS, payload: doctors });
  } catch(error) {
    yield put({ type: GET_DOCTORS_ERROR });
  }
}

//DOCTORS async actions watch function
function* watchGetDoctor() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_DOCTOR);
    // fork return a Task object for cancel later
    yield call(getSingleDoctor, payload);
  }
}

//DOCTORS async actions watch function
function* watchGetDoctors() {
  while (true) {
    const { payload } = yield take(GET_DOCTORS);
    // fork return a Task object for cancel later
    yield call(getDoctors, payload);
  }
}

 
//info answer comments fav

//watch doctor info
function* watchDoctorInfo() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_DOCTOR_INFO);
    // fork return a Task object for cancel later
    yield call(getSingleDoctorInfo, payload);
  }
}

//watch doctor comments
function* watchDoctorComments() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_DOCTOR_COMMENTS);
    // fork return a Task object for cancel later
    yield call(getSingleDoctorComments, payload);
  }
}

//watch add doctor fav
function* watchAddDoctorFav() {
  while (true) {
    const { payload } = yield take(ADD_SINGLE_DOCTOR_FAV);
    // fork return a Task object for cancel later
    yield call(addSingleDoctorFav, payload);
  }
}

//watch doctor answers
function* watchDoctorAnswers() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_DOCTOR_ANSWERS);
    // fork return a Task object for cancel later
    yield call(getSingleDoctorAnswers, payload);
  }
}




export {
  watchGetDoctor,
  watchGetDoctors,

  watchDoctorInfo,
  watchDoctorComments,
  watchDoctorAnswers,
  watchAddDoctorFav,
}