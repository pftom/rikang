import { delay } from 'redux-saga';
import { put, take, call } from 'redux-saga/effects';

//import POSTS action constans
import { 
  GET_SINGLE_QUESTION_ALL_ANSWERS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
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
    const { post } = yield call(request.get, base + homeSingleApi(id).getSinglePost, null, token);
    yield put({ type: GET_SINGLE_POST_SUCCESS, post });
  } catch (error) {
    yield put({ type: GET_SINGLE_POST_ERROR });
  }
}


//POSTS async actions handle function
function* getPosts(payload) {
  try {
    const { posts } = yield call(request.get, base + homeApi.posts, null, payload);
    yield put({ type: GET_POSTS_SUCCESS, payload: posts });
  } catch(error) {
    yield put({ type: GET_POSTS_ERROR });
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




export {
  watchGetPost,
  watchGetPosts,
}