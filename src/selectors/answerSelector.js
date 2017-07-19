import { createSelector } from 'reselect';


const getSingleAnswerAllComments = (state) => state.getIn(['answer', 'singleAnswerAllComments']);

export const getAnswerCommentSelector = createSelector(
  [ getSingleAnswerAllComments ],
  (singleAnswerAllComments) => {
    return {
      singleAnswerAllComments,
    }
  }
);