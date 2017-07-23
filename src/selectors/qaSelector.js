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

export const getQaSelector = createSelector(
  [ getToken, getQuestions, getQuestionStarredFav ],
  (token, questions, questionStarredFav) => {
      return {
      token,
      questions,
      questionStarredFav,
    }
  }
);

const getQuestion = (state) => state.getIn(['qa', 'question']);
const getQuestionAllImg = (state) => state.getIn(['qa', 'AllImg']);
const getAnswers = (state) => state.getIn(['answer', 'answers']);

export const getSingleQaSelector = createSelector(
  [ getQuestion, getQuestionAllImg, getAnswers, getQuestionStarredFav ],
  (question, AllImg, answers, questionStarredFav) => ({
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