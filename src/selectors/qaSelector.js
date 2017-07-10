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