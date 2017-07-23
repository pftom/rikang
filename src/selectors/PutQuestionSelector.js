import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getIsLoadingQuestion = (state) => state.getIn(['qa', 'isAddQuestion']);
const getLoadingSuccess = (state) => state.getIn(['qa', 'addQuestionSuccess']);
const getLoadingError = (state) => state.getIn(['qa', 'addQuestionError']);

export const getQuestionStatusSelector = createSelector(
  [ getIsLoadingQuestion, getLoadingSuccess,  getLoadingError ],
  (isAddQuestion, addQuestionSuccess, addQuestionError) => ({
    isAddQuestion,
    addQuestionSuccess,
    addQuestionError,
  }),
);