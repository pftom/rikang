import { Map } from 'immutable';

//import test reducer
import answer from '../answer';


//import action constants
import { 
  GET_SINGLE_QUESTION_ALL_ANSWERS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR,
} from '../../constants/'

//answer reducers
const initialAnswerValue = Map({
  answers: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
});


//test singleQA action
const singleQA = {
  type: GET_SINGLE_QUESTION_ALL_ANSWERS,
};

//test singleQASuccess action
const singleQASuccess = {
  type: GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
  answers: {}
};

//test singleQAError action
const singleQAError = {
  type: GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR,
};

test('the answer reducer work as well', () => {
  expect(answer(initialAnswerValue, singleQA)).toMatchSnapshot();
  expect(answer(initialAnswerValue, singleQASuccess)).toMatchSnapshot();
  expect(answer(initialAnswerValue, singleQAError)).toMatchSnapshot();
})