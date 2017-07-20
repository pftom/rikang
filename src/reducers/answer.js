import { List, Map } from 'immutable';

//import action constants
import { 
  GET_SINGLE_QUESTION_ALL_ANSWERS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS,
  GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR,

  GET_SINGLE_ANSWER_ALL_COMMENTS,
  GET_SINGLE_ANSWER_ALL_COMMENTS_SUCCESS,
  GET_SINGLE_ANSWER_ALL_COMMENTS_ERROR,

  CREATE_SINGLE_QUESTION_ANSWER_COMMENT,
  CREATE_SINGLE_QUESTION_ANSWER_COMMENT_SUCCESS,
  CREATE_SINGLE_QUESTION_ANSWER_COMMENT_ERROR,

  CLEAR_COMMENT_STATE,
} from '../constants/';

//import handle func for computing data
import {
  combine,
  refreshIt,
} from './utils/';

//home reducers
const initialAnswerValue = Map({
  answers: null,
  singleAnswerAllComments: null,
  isLoadingData: false,
  loadingError: false,
  loadingSuccess: false,
  commentListSeq: List([]),
  isCommenting: false,
  commentSuccess: false,
  commentError: false,
});

const answer = (state = initialAnswerValue, action) => {
  switch (action.type) {
    case GET_SINGLE_QUESTION_ALL_ANSWERS:
    case GET_SINGLE_ANSWER_ALL_COMMENTS:

      return state.merge({
        isLoadingData: true,
        loadingError: false,
        loadingSuccess: false,
      });
    
    case CREATE_SINGLE_QUESTION_ANSWER_COMMENT:

      return state.merge({
        isCommenting: true,
        commentSuccess: false,
        commentError: false,
      });

    case CREATE_SINGLE_QUESTION_ANSWER_COMMENT_ERROR:


      return state.merge({
        isCommenting: false,
        commentError: true,
        commentSuccess: false,
      });

    case CREATE_SINGLE_QUESTION_ANSWER_COMMENT_SUCCESS:

      const { comment } = action;

      return state.update('commentListSeq', list => list.unshift(comment))
                  .merge({
                    isCommenting: false,
                    commentError: false,
                    commentSuccess: true,
                  })
    
    case GET_SINGLE_QUESTION_ALL_ANSWERS_SUCCESS:

      const { answers } = action;

      let oldAnswers = state.get('answers');

      if (answers) {
        answers = Map(answers);
      }
      return state
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
              answers: action.refresh ? refreshIt(oldAnswers, answers) : combine(oldAnswers, answers),
            })


    case GET_SINGLE_ANSWER_ALL_COMMENTS_SUCCESS:

      const { singleAnswerAllComments } = action;

      let oldSingleAnswerAllComments = state.get('singleAnswerAllComments');

      if (singleAnswerAllComments) {
        singleAnswerAllComments = Map(singleAnswerAllComments);

      }

      const tempSingleAnswerAllComments = action.refresh ? refreshIt(oldSingleAnswerAllComments, singleAnswerAllComments) : combine(oldSingleAnswerAllComments, singleAnswerAllComments);

      return state
            .merge({
              isLoadingData: false,
              loadingSuccess: true,
              singleAnswerAllComments: tempSingleAnswerAllComments,
              commentListSeq: tempSingleAnswerAllComments.results,
            })

    case CLEAR_COMMENT_STATE:

      return state
            .merge({
              commentError: false,
              commentSuccess: false,
              isCommenting: false,
            });


    case GET_SINGLE_QUESTION_ALL_ANSWERS_ERROR:
    case GET_SINGLE_ANSWER_ALL_COMMENTS_ERROR:

      return state.merge({
        isLoadingData: false,
        loadingError: true,
      });

    default:
      return state;
  }
};

export default answer;