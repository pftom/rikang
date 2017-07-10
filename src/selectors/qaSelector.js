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

export const getSingleQaSelector = createSelector(
  [ getQuestion ],
  (question) => ({
    question,
  }),
);