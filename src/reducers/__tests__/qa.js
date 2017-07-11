import { Map, List } from 'immutable';

import qa from '../qa';

//import single action constants
import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_ERROR,

  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_SUCCESS,
  GET_SINGLE_QUESTION_ERROR,

  GET_SINGLE_QUESTION_ALL_IMG,
  GET_SINGLE_QUESTION_ALL_IMG_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,
} from '../../constants/';


//test questions
const getQuestionsAction = {
  type: GET_QUESTIONS,
};

const getQuestionsSuccessAction = {
  type: GET_QUESTIONS_SUCCESS,
  questions: {},
};

const getQuestionsErrorAction = {
  type: GET_QUESTIONS_ERROR,
};

//test single question
const getSingleQuestionAction = {
  type: GET_SINGLE_QUESTION,
};

const getSingleQuestionSuccessAction = {
  type: GET_SINGLE_QUESTION_SUCCESS,
  question: {},
};

const getSingleQuestionErrorAction = {
  type: GET_SINGLE_QUESTION_ERROR,
};

//test all img
const getSingleQuestionAllImgAction = {
  type: GET_SINGLE_QUESTION_ALL_IMG,
};

const getSingleQuestionAllImgSuccessAction = {
  type: GET_SINGLE_QUESTION_ALL_IMG_SUCCESS,
  AllImg: {},
};

const getSingleQuestionAllImgErrorAction = {
  type: GET_SINGLE_QUESTION_ALL_IMG_ERROR,
};

//qa reducers
const initialQaValue = Map({
  questions: null,
  question: null,
  AllImg: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});


test('the qa reducer work as well', () => {
  //test questions
  expect(qa(initialQaValue, getQuestionsAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getQuestionsSuccessAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getQuestionsErrorAction)).toMatchSnapshot();

  //test single question
  expect(qa(initialQaValue, getSingleQuestionAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getSingleQuestionSuccessAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getSingleQuestionErrorAction)).toMatchSnapshot();

  //test all img
  expect(qa(initialQaValue, getSingleQuestionAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getSingleQuestionAllImgSuccessAction)).toMatchSnapshot();
  expect(qa(initialQaValue.merge({ isLoadingData: true }), getSingleQuestionAllImgErrorAction)).toMatchSnapshot();
});