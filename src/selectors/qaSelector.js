import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getQuestions = (state) => state.getIn(['qa', 'questions']);

export const getQaSelector = createSelector(
  [ getToken, getQuestions ],
  (token, questions) => ({
    token,
    questions,
  }),
);

const getQuestion = (state) => state.getIn(['qa', 'question']);
const getQuestionAllImg = (state) => state.getIn(['qa', 'AllImg']);
const getAnswers = (state) => state.getIn(['answer', 'answers']);

export const getSingleQaSelector = createSelector(
  [ getQuestion, getQuestionAllImg, getAnswers ],
  (question, AllImg, answers) => ({
    question,
    AllImg,
    answers
  }),
);

const getQuestionFav = (state) => state.getIn(['patient', 'questionFav']);

export const getQuestionFavSelector = createSelector(
  [ getQuestionFav ],
  (questionFav) => ({
    questionFav,
  }),
);