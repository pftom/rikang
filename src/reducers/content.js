import { combineReducers } from 'redux';

import {
  REQUEST_EVENT,
  REQUEST_EVENT_FAILURE,
  REQUEST_EVENT_SUCCESSFUL,
  REQUEST_SINGLE_NEWS,
  REQUEST_SINGLE_NEWS_SUCCESSFUL,
  REQUEST_SINGLE_NEWS_FAILURE,
} from '../constants';

const initialEventState = {
  isFetching: false,
  event: {},
  err: null,
};

function event (state = initialEventState, action) {
  switch (action.type) {
    case REQUEST_EVENT:
      return { ...state, isFetching: true, };
    case REQUEST_EVENT_SUCCESSFUL:
      return { ...state, isFetching: false, event: action.data, err: null };
    case REQUEST_EVENT_FAILURE:
      return { ...state, isFetching: false, err: action.err };
    default:  return state;
  }
}

const initialNewState = {
  isFetching: false,
  new: {},
  err: null,
};


function single_news (state = initialNewState, action) {
  switch (action.type) {
    case REQUEST_SINGLE_NEWS:
      return { ...state, isFetching: true, };
    case REQUEST_SINGLE_NEWS_SUCCESSFUL:
      return { ...state, isFetching: false, new: action.data, err: null, };
    case REQUEST_SINGLE_NEWS_FAILURE:
      return { ...state, isFetching: false, err: action.err,  };
    default:
      return state;
  }
}

export default combineReducers({
  event,
  single_news,
});