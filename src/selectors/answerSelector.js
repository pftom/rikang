import { createSelector } from 'reselect';


const getSingleAnswerAllComments = (state) => state.getIn(['answer', 'singleAnswerAllComments']);
const getCommentList = (state) => state.getIn(['answer', 'commentListSeq']);
const getSingleCommentLoadingData = (state) => state.getIn(['answer', 'isCommenting']);
const getSingleCommentLoadingError = (state) => state.getIn(['answer', 'commentError']);
const getSingleCommentLoadingSuccess = (state) => state.getIn(['answer', 'commentSuccess']);
const getUserId = (state) => state.getIn(['patient', 'id']);


export const getAnswerCommentSelector = createSelector(
  [ getUserId, getSingleAnswerAllComments, getCommentList, getSingleCommentLoadingData, getSingleCommentLoadingError, getSingleCommentLoadingSuccess ],
  ( userId, singleAnswerAllComments, commentListSeq, isCommenting, commentError, commentSuccess) => {
    return {
      userId,
      singleAnswerAllComments,
      commentListSeq,
      isCommenting,
      commentError,
      commentSuccess,
    }
  }
);