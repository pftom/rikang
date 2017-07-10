import Immutable from 'immutable';

import home from '../home';

//import action constants
import { 
  GET_DOCTORS,
  GET_DOCTORS_ERROR,
  GET_DOCTORS_SUCCESS, 

  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from '../../constants/';

//import single action constants
import {
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_SUCCESS,
  GET_SINGLE_DOCTOR_ERROR,

  GET_SINGLE_POST,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
} from '../../constants/';



//get doctors
const getDoctorsAction = {
  type: GET_DOCTORS,
};

const getDoctorsSuccessAction = {
  type: GET_DOCTORS_SUCCESS,
  doctors: {},
};

const getDoctorsErrorAction = {
  type: GET_DOCTORS_ERROR,
};

//get posts
const getPostsAction = {
  type: GET_POSTS,
};

const getPostsSuccessAction = {
  type: GET_POSTS_SUCCESS,
  posts: {},
};

const getPostsErrorAction = {
  type: GET_POSTS_ERROR,
};

//get single doctor
const getSingleDoctorAction = {
  type: GET_SINGLE_DOCTOR,
};

const getSingleDoctorSuccessAction = {
  type: GET_SINGLE_DOCTOR_SUCCESS,
  doctor: {},
};

const getSingleDoctorErrorAction = {
  type: GET_SINGLE_DOCTOR_ERROR,
};

//get single post
const getSinglePostAction = {
  type: GET_SINGLE_POST,
};

const getSinglePostSuccessAction = {
  type: GET_SINGLE_POST_SUCCESS,
  post: {},
};

const getSinglePostErrorAction = {
  type: GET_SINGLE_POST_ERROR,
};


//home reducers
const initialHomeValue = Immutable.Map({
  doctors: null,
  posts: null,
  doctor: null,
  post: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});

test('the home reducer work as well', () => {
  //test doctors
  expect(home(initialHomeValue, getDoctorsAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getDoctorsSuccessAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getDoctorsErrorAction)).toMatchSnapshot();

  //test home
  expect(home(initialHomeValue, getPostsAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getPostsSuccessAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getPostsErrorAction)).toMatchSnapshot();

  //test home doctor
  expect(home(initialHomeValue, getSingleDoctorAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getSingleDoctorSuccessAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getSingleDoctorErrorAction)).toMatchSnapshot();

  //test home post
  expect(home(initialHomeValue, getSinglePostAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getSinglePostSuccessAction)).toMatchSnapshot();
  expect(home(initialHomeValue.merge({ isLoadingData: true }), getSinglePostErrorAction)).toMatchSnapshot();
});