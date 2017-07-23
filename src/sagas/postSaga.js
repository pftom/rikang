import { delay } from 'redux-saga';
import { put, take, call, fork, cancel } from 'redux-saga/effects';

//import POSTS action constans
import { 
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,

  GET_SINGLE_POST,
  GET_SINGLE_POST_ERROR,
  GET_SINGLE_POST_SUCCESS,

  ADD_SINGLE_POST_FAV,
  ADD_SINGLE_POST_FAV_SUCCESS,
  ADD_SINGLE_POST_FAV_ERROR,

  CANCEL_SINGLE_POST_FAV,
  CANCEL_SINGLE_POST_FAV_SUCCESS,
  CANCEL_SINGLE_POST_FAV_ERROR,
} from '../constants/';

//import request api
import request from '../configs/request';
//import uri config api
import { base, homeApi, homeSingleApi } from '../configs/config';
//  import clear token api
// import { clearItem, setItem } from '../actions/user';

function* getSinglePost(payload) {
  try {
    const { id, token } = payload;
    const post = yield call(request.get, base + homeSingleApi(id).singlePost, null, token);
    yield put({ type: GET_SINGLE_POST_SUCCESS, post });
  } catch (error) {
    yield put({ type: GET_SINGLE_POST_ERROR });
  }
}


//POSTS async actions handle function
function* getPosts(payload) {
  try {
    const { token, refresh } = payload;
    const query = (!refresh && payload.query) || null;
    const posts = yield call(request.get, base + homeApi.posts, query, token);
    yield put({ type: GET_POSTS_SUCCESS, payload: { posts, refresh } });
  } catch(error) {
    yield put({ type: GET_POSTS_ERROR });
  }
}


//add doctor fav
function* addSinglePostFav(payload) {
  try {
    const { id, token, post } = payload;
    //emit http get, fetch single doctor fav
    yield call(request.get, base + homeSingleApi(id).addSinglePostFav, null, token);
    //get doctor fav success 
    yield put({ type: ADD_SINGLE_POST_FAV_SUCCESS, post });
  } catch (error) {
    //get fav info error
    yield put({ type: ADD_SINGLE_POST_FAV_ERROR });
  }
}

//cancel doctor fav
function* cancelSinglePostFav(payload) {
  try {
    const { id, token } = payload;
    //emit http get, cancel single doctor fav
    yield call(request.get, base + homeSingleApi(id).cancelSinglePostFav, null, token);
    //get doctor fav success 
    yield put({ type: CANCEL_SINGLE_POST_FAV_SUCCESS, id });
  } catch (error) {
    //get fav info error
    yield put({ type: CANCEL_SINGLE_POST_FAV_ERROR });
  }
}

//POSTS async actions watch function
function* watchGetPost() {
  while (true) {
    const { payload } = yield take(GET_SINGLE_POST);
    // fork return a Task object for cancel later
    yield call(getSinglePost, payload);
  }
}

//POSTS async actions watch function
function* watchGetPosts() {
  while (true) {
    const { payload } = yield take(GET_POSTS);
    // fork return a Task object for cancel later
    yield call(getPosts, payload);
  }
}

function* watchAddPostFav() {
  while (true) {
    //listen on ADD_SINGLE_DOCTOR_FAV
    const { payload } = yield take(ADD_SINGLE_POST_FAV);
    //invoke addSingleDoctorFav generator function
    const task = yield fork(addSinglePostFav, payload);
    
    //wait for cancel fav
    const action = yield take(CANCEL_SINGLE_POST_FAV);
    //if meet CANCEL action
    yield cancel(task);
  }
}

//watch add doctor fav
function* watchCancelPostFav() {
  while (true) {
    
    //wait for cancel fav
    const { payload } = yield take(CANCEL_SINGLE_POST_FAV);
    
   const task = yield fork(cancelSinglePostFav, payload);
   const action = yield take(ADD_SINGLE_POST_FAV);

   yield cancel(task);
  }
}




export {
  watchGetPost,
  watchGetPosts,

  watchAddPostFav,
  watchCancelPostFav,
}