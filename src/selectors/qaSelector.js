import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getQuestions = (state) => state.getIn(['qa', 'questions']);
const getQuestionFav = (state) => state.getIn(['patient', 'questionFav']);

export const getQaSelector = createSelector(
  [ getToken, getQuestions, getQuestionFav ],
  (token, questions, questionFav) => ({
    token,
    questions,
    questionFav,
  }),
);

const getQuestion = (state) => state.getIn(['qa', 'question']);
const getQuestionAllImg = (state) => state.getIn(['qa', 'AllImg']);
const getAnswers = (state) => state.getIn(['answer', 'answers']);

export const getSingleQaSelector = createSelector(
  [ getQuestion, getQuestionAllImg, getAnswers, getQuestionFav ],
  (question, AllImg, answers, questionFav) => ({
    question,
    AllImg,
    answers,
    questionFav,
  }),
);



export const getQuestionFavSelector = createSelector(
  [ getQuestionFav ],
  (questionFav) => ({
    questionFav,
  }),
);