import { createSelector } from 'reselect';


const getSingleAnswerAllComments = (state) => state.getIn(['answer', 'singleAnswerAllComments']);
const getCommentList = (state) => state.getIn(['answer', 'commentListSeq']);
const getSingleCommentLoadingData = (state) => state.getIn(['answer', 'isCommenting']);
const getSingleCommentLoadingError = (state) => state.getIn(['answer', 'commentError']);
const getSingleCommentLoadingSuccess = (state) => state.getIn(['answer', 'commentSuccess']);


export const getAnswerCommentSelector = createSelector(
  [ getSingleAnswerAllComments, getCommentList, getSingleCommentLoadingData, getSingleCommentLoadingError, getSingleCommentLoadingSuccess ],
  (singleAnswerAllComments, commentListSeq, isCommenting, commentError, commentSuccess) => {
    return {
      singleAnswerAllComments,
      commentListSeq,
      isCommenting,
      commentError,
      commentSuccess,
    }
  }
);