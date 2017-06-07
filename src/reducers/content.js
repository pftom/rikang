import { combineReducers } from 'redux';

import {
  REQUEST_EVENT,
  REQUEST_EVENT_FAILURE,
  REQUEST_EVENT_SUCCESSFUL,
  REQUEST_SINGLE_NEWS,
  REQUEST_SINGLE_NEWS_SUCCESSFUL,
  REQUEST_SINGLE_NEWS_FAILURE,
  REQUEST_ATTEND,
  REQUEST_ATTEND_FAILURE,
  REQUEST_ATTEND_SUCCESSFUL,
  SUBMIT_CONFIRM,
} from '../constants';

const initialAttendState = {
  isFetching: false,
  attend: {},
  err: false,
  success: false,
};

function attend (state = initialAttendState, action) {
  switch (action.type) {
    case REQUEST_ATTEND:
      return { ...state, isFetching: true };
    case REQUEST_ATTEND_SUCCESSFUL: 
      return { ...state, isFetching: false, attend: action.data, err: false, success: true };
    case REQUEST_ATTEND_FAILURE:
      return { ...state, isFetching: false, err: true, success: true, };
    case SUBMIT_CONFIRM:
      return { ...state, err: false };
    default: return state;
  }
}

const initialEventState = {
  isFetching: false,
  event: {},
  err: false,
};

function event (state = initialEventState, action) {
  switch (action.type) {
    case REQUEST_EVENT:
      return { ...state, isFetching: true, };
    case REQUEST_EVENT_SUCCESSFUL:
      return { ...state, isFetching: false, event: action.data, err: null };
    case REQUEST_EVENT_FAILURE:
      return { ...state, isFetching: false, err: true };
    default:  return state;
  }
}

const initialNewState = {
  isFetching: false,
  new: {},
  err: false,
};


function single_news (state = initialNewState, action) {
  switch (action.type) {
    case REQUEST_SINGLE_NEWS:
      return { ...state, isFetching: true, };
    case REQUEST_SINGLE_NEWS_SUCCESSFUL:
      return { ...state, isFetching: false, new: action.data, err: null, };
    case REQUEST_SINGLE_NEWS_FAILURE:
      return { ...state, isFetching: false, err: true,  };
    default:
      return state;
  }
}

export default combineReducers({
  event,
  single_news,
  attend
});
