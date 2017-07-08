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

  CREATE_SINGLE_DOCTOR_COMMENTS,
  CREATE_SINGLE_DOCTOR_COMMENTS_SUCCESS,
  CREATE_SINGLE_DOCTOR_COMMENTS_ERROR,

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
function* getSingleDoctorInfo(payload) {
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
function* getSingleDoctorAnswers(payload) {
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

function* addSingleDoctorFav(payload) {
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

function* getSingleDoctorComments(payload) {
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

//create single doctor comment
function* createSingleDoctorComments(payload) {
  try {
    const { id, token, content } = payload;
    //emit http get, fetch single doctor comment
    const comments = yield call(request.post, base + homeSingleApi(id).addsingleDoctorComments, content, token);
    //create doctor comments success 
    yield put({ type: CREATE_SINGLE_DOCTOR_COMMENTS_SUCCESS, comments });
  } catch (error) {
    //create comments error
    yield put({ type: CREATE_SINGLE_DOCTOR_COMMENTS_ERROR });
  }
}


//DOCTORS async actions handle function
function* getDoctors(payload) {
  try {
    const { token } = payload;
    //emit http get, fetch  doctors 
    const doctors = yield call(request.get, base + homeApi.doctors, null, token);
    //emit get doctors success
    yield put({ type: GET_DOCTORS_SUCCESS, doctors });
  } catch(error) {
    //emit get doctors error
    yield put({ type: GET_DOCTORS_ERROR });
  }
}

//DOCTORS async actions watch function
function* watchGetDoctor() {
  while (true) {
    //listen on GET_SINGLE_DOCTOR
    const { payload } = yield take(GET_SINGLE_DOCTOR);
    //invoke getSingleDoctor generator function
    yield call(getSingleDoctor, payload);
  }
}

//DOCTORS async actions watch function
function* watchGetDoctors() {
  while (true) {
    //listen on GET_DOCTORS
    const { payload } = yield take(GET_DOCTORS);
    //invoke getDoctors generator function
    yield call(getDoctors, payload);
  }
}

 
//info answer comments fav

//watch doctor info
function* watchDoctorInfo() {
  while (true) {
    //listen on GET_SINGLE_DOCTOR_INFO
    const { payload } = yield take(GET_SINGLE_DOCTOR_INFO);
    //invoke getSingleDoctorInfo generator function
    yield call(getSingleDoctorInfo, payload);
  }
}

//watch doctor comments
function* watchDoctorComments() {
  while (true) {
    //listen on GET_SINGLE_DOCTOR_COMMENTS
    const { payload } = yield take(GET_SINGLE_DOCTOR_COMMENTS);
    //invoke getSingleDoctorComments generator function
    yield call(getSingleDoctorComments, payload);
  }
}

//watch add doctor fav
function* watchAddDoctorFav() {
  while (true) {
    //listen on ADD_SINGLE_DOCTOR_FAV
    const { payload } = yield take(ADD_SINGLE_DOCTOR_FAV);
    //invoke addSingleDoctorFav generator function
    yield call(addSingleDoctorFav, payload);
  }
}

//watch doctor answers
function* watchDoctorAnswers() {
  while (true) {
    //listen on GET_SINGLE_DOCTOR_ANSWERS
    const { payload } = yield take(GET_SINGLE_DOCTOR_ANSWERS);
    //invoke getSingleDoctorAnswers generator function
    yield call(getSingleDoctorAnswers, payload);
  }
}

function* watchCreateSingleDoctorComment() {
  while (true) {
    //listen on CREATE_SINGLE_DOCTOR_COMMENTS
    const { payload } = yield take(CREATE_SINGLE_DOCTOR_COMMENTS);

    //invoke createSingleDoctorComments generator function
    yield call(createSingleDoctorComments, payload);
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