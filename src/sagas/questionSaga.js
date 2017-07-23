import { delay } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';

//import HOSPITAL action constans
import { 
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,

  CREATE_SINGLE_QUESTION,
  CREATE_SINGLE_QUESTION_SUCCESS,
  CREATE_SINGLE_QUESTION_ERROR,

  ADD_SINGLE_QUESTION_IMG,
  ADD_SINGLE_QUESTION_IMG_SUCCESS,
  ADD_SINGLE_QUESTION_IMG_ERROR,

  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_ERROR,

  UPDATE_SINGLE_QUESTION,
  UPDATE_SINGLE_QUESTION_SUCCESS,
  UPDATE_SINGLE_QUESTION_ERROR,

  GET_SINGLE_QUESTION_ALL_IMG,
  GET_SINGLE_QUESTION_ALL_IMG_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,

  STAR_SINGLE_QUESTION,
  STAR_SINGLE_QUESTION_SUCCESS,
  STAR_SINGLE_QUESTION_ERROR,

  CANCEL_STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION_SUCCESS,
  CANCEL_STAR_SINGLE_QUESTION_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, qaApi, qaSingleApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';


//get the questions list
function* getQuestions(payload) {
  try {
    const { token, refresh } = payload;
    const query = (!refresh && payload.query) || null;

    const questions = yield call(request.get, base + qaApi.questions, query, token);

    yield put({ type: GET_QUESTIONS_SUCCESS, questions, refresh });
  } catch (error) {
    yield put({ type: GET_QUESTIONS_ERROR });
  }
}


//create a new question
function* createSingleQuestion(payload) {
  try {
    const { token, body, imgs } = payload;
    const question = yield call(request.post, base + qaApi.addQuestion, body, token);
    yield put({ type: CREATE_SINGLE_QUESTION_SUCCESS, question });
  } catch (error) {
    yield put({ type: CREATE_SINGLE_QUESTION_ERROR });
  }
}

//add img for question
function* addImgForQuestion(payload) {
  try {
    const { token, id, body } = payload;
    //the last param supply multipart/form-data support
    const questionImg = yield call(request.post, base + qaSingleApi(id).addQuestionImg, body, token, true);
    yield put({ type: ADD_SINGLE_QUESTION_IMG_SUCCESS, questionImg });
  } catch (error) {
    yield put({ type: ADD_SINGLE_QUESTION_IMG_ERROR });
  }
}

//get single question
function* getSingleQuestion(payload) {
  try {
    const { token, id } = payload;
    const question = yield call(request.get, base + qaSingleApi(id).singleQuestion, null, token);
    yield put({ type: GET_SINGLE_QUESTION_SUCCESS, question });
  } catch (error) {
    yield put({ type: GET_SINGLE_QUESTION_ERROR });
  }
}

function* updateSingleQuestion(payload) {
  try {
    const { token, id, body } = payload;

    const question = yield call(request.put, base + qaSingleApi(id).updateSingleQuestion, body, token );

    yield put({ type: UPDATE_SINGLE_QUESTION_SUCCESS, question });
  } catch (error) {
    yield put({ type: UPDATE_SINGLE_QUESTION_ERROR });
  }
}

function* getSingleQuestionAllImg(payload) {
  try {
    const { token, id } = payload;

    const AllImg = yield call(request.get, base + qaSingleApi(id).singleQuestionAllImg, null, token);

    yield put({ type: GET_SINGLE_QUESTION_ALL_IMG_SUCCESS, AllImg });
  } catch (error) {
    yield put({ type: GET_SINGLE_QUESTION_ALL_IMG_ERROR });
  }
}

function* starSingleQuestion(payload) {
  try {
    const { token, id, question } = payload;
    console.log('url', base + qaSingleApi(id).singleQuestionStar);
    yield call(request.get, base + qaSingleApi(id).singleQuestionStar, null, token);

    yield put({ type: STAR_SINGLE_QUESTION_SUCCESS, question, id });
  } catch (error) {
    yield put({ type: STAR_SINGLE_QUESTION_ERROR });
  }
}

//cancel doctor fav
function* cancelStartSingleQuestion(payload) {
  try {
    const { id, token } = payload;
    //emit http get, cancel single doctor fav
    // yield call(request.get, base + homeSingleApi(id).addSingleDoctorFav, null, token);
    //get doctor fav success 
    yield put({ type: CANCEL_STAR_SINGLE_QUESTION_SUCCESS, id });
  } catch (error) {
    //get fav info error
    yield put({ type: CANCEL_STAR_SINGLE_QUESTION_ERROR });
  }
}


//HOSPITAL async actions handle function
function* watchGetQuestions() {
  while (true) {
    const { payload } = yield take(GET_QUESTIONS);

    yield call(getQuestions, payload);
  }
}

function* watchCreateSingleQuestion() {
  while (true) {
    const { payload } = yield take(CREATE_SINGLE_QUESTION);

    yield call(createSingleQuestion, payload);
  }
}

function* watchAddSingleQuestionImg() {
  while (true) {
    const { payload } = yield take(ADD_SINGLE_QUESTION_IMG);

    yield call(addImgForQuestion, payload);
  }
}

function* watchGetSingleQuestion() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_QUESTION);
    console.log('payload', payload);
    yield call(getSingleQuestion, payload);
  }
}

function* watchUpdateSingleQuestion() {
  while (true) {
    const { payload } = yield take(UPDATE_SINGLE_QUESTION);

    yield call(updateSingleQuestion, payload);
  }
}

function* watchGetSingleQuestionAllImg() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_QUESTION_ALL_IMG);
    yield call(getSingleQuestionAllImg, payload);
  }
}

function* watchStarSingleQuestion() {
  while (true) {
    const { payload } = yield take(STAR_SINGLE_QUESTION);

    const task = yield fork(starSingleQuestion, payload);

    //wait for cancel fav
    const action = yield take(CANCEL_STAR_SINGLE_QUESTION);
    //if meet CANCEL action
    yield cancel(task);
  }
}


//watch add doctor fav
function* watchCancelStarSingleQuestion() {
  while (true) {
    
    //wait for cancel fav
    const { payload } = yield take(CANCEL_STAR_SINGLE_QUESTION);
    
   const task = yield fork(cancelStartSingleQuestion, payload);
   const action = yield take(STAR_SINGLE_QUESTION);

   yield cancel(task);
  }
}





export {
  watchGetQuestions,
  watchCreateSingleQuestion,
  watchAddSingleQuestionImg,
  watchGetSingleQuestion,
  watchUpdateSingleQuestion,
  watchGetSingleQuestionAllImg,
  watchStarSingleQuestion,
  watchCancelStarSingleQuestion,
}