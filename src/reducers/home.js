import { combineReducers } from 'redux';

import {
  REQUEST_EVENTS,
  REQUEST_EVENTS_FAILURE,
  REQUEST_EVENTS_SUCCESSFUL,
  REQUEST_NEWS,
  REQUEST_NEWS_SUCCESSFUL,
  REQUEST_NEWS_FAILURE,
} from '../constants';

const initialEventsState = {
  isFetching: false,
  events: {},
  err: null,
};

var total1 = [];
var total2 = [];

function concatArray(data, type) {
  if (type === 'EVENTS') {
    total1 = total1.slice().concat(data.results);
    return { ...data, results: total1 };
  } else if (type === 'NEWS') {
    total2 = total2.slice().concat(data.results);
    return { ...data, results: total2};
  }
   

  return { ...data, results: total };
}

function events (state = initialEventsState, action) {
  switch (action.type) {
    case REQUEST_EVENTS:
      return { ...state, isFetching: true, };
    case REQUEST_EVENTS_SUCCESSFUL:
      return { 
        ...state, 
        isFetching: false, 
        events: concatArray(action.data, 'EVENTS'),
        err: null 
      };
    case REQUEST_EVENTS_FAILURE:
      return { ...state, isFetching: false, err: action.err };
    default:  return state;
  }
}

const initialNewsState = {
  isFetching: false,
  news: {},
  err: null,
};


function news (state = initialNewsState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, isFetching: true, };
    case REQUEST_NEWS_SUCCESSFUL:
      return { ...state, isFetching: false, news: concatArray(action.data, 'NEWS'), err: null, };
    case REQUEST_NEWS_FAILURE:
      return { ...state, isFetching: false, err: action.err,  };
    default:
      return state;
  }
}

export default combineReducers({
  events,
  news,
});