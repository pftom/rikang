import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

import {
  getIsFaving,
  getFavSuccess,
  getFavError,

  getIsCancelFaving,
  getCancelFavSuccess,
  getCancelFavError,
} from './TabOneMainSelector.js';

const getQuestions = (state) => state.getIn(['qa', 'questions']);
const getQuestionStarredFav = (state) => state.getIn(['patient', 'questionStarredFav']);
const getMyQuestions = (state) => state.getIn(['patient', 'questionFav']);

export const getQaSelector = createSelector(
  [ getToken, getQuestions, getQuestionStarredFav, getMyQuestions ],
  (token, questions, questionStarredFav, questionFav ) => {
      return {
      token,
      questions,
      questionStarredFav,
      questionFav,
    }
  }
);

const getQuestion = (state) => state.getIn(['qa', 'question']);
const getQuestionAllImg = (state) => state.getIn(['qa', 'AllImg']);
const getAnswers = (state) => state.getIn(['answer', 'answers']);
const getUserId = (state) => state.getIn(['auth', 'id']);

export const getSingleQaSelector = createSelector(
  [ getUserId, getQuestion, getQuestionAllImg, getAnswers, getQuestionStarredFav ],
  ( userId, question, AllImg, answers, questionStarredFav) => ({
    userId,
    question,
    AllImg,
    answers,
    questionStarredFav,
  }),
);



export const getQuestionFavSelector = createSelector(
  [ getQuestionStarredFav ],
  (questionStarredFav) => ({
    questionStarredFav,
  }),
);

export const getQuestionListSelector = createSelector(
  [ getIsFaving, getFavSuccess, getFavError, getIsCancelFaving, getCancelFavSuccess, getCancelFavError ],
  (isStarSingleQuestion, starSingleQuestionSuccess, starSingleQuestionError, isCancelStarSingleQuestion, cancelStarSingleQuestionSuccess, cancelStarSingleQuestionError) => ({
    isStarSingleQuestion,
    starSingleQuestionSuccess,
    starSingleQuestionError,
    isCancelStarSingleQuestion,
    cancelStarSingleQuestionSuccess,
    cancelStarSingleQuestionError,
  })
)