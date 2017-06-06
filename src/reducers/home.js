import { combineReducers } from 'redux';

import {
  REQUEST_EVENTS,
  REQUEST_EVENTS_FAILURE,
  REQUEST_EVENTS_SUCCESSFUL,
  REQUEST_NEWS,
  REQUEST_NEWS_SUCCESSFUL,
  REQUEST_NEWS_FAILURE,
  REQUEST_EVENTS_HEADLINE_SUCCESSFUL,
  REQUEST_EVENTS_ACTIVE_SUCCESSFUL,
} from '../constants';

var totalActive = [];
let total1 = [];
let total2 = [];

function concatArray(data, type) {
  if (type === 'REQUEST_EVENTS_SUCCESSFUL') {
    total1 = total1.slice().concat(data.results);
    return { ...data, results: total1 };
  } else if (type === 'REQUEST_NEWS_SUCCESSFUL') {
    total2 = total2.slice().concat(data.results);
    return { ...data, results: total2};
  } else if (type === 'REQUEST_EVENTS_ACTIVE_SUCCESSFUL') {
    totalActive = totalActive.slice().concat(data.results);
    return { ...data, results: totalActive };
  }
}

const initialEventsState = {
  isFetching: false,
  events: {},
  err: false,
  headlineEvents: {},
  activeEvents: {},
};

function events (state = initialEventsState, action) {
  switch (action.type) {
    case REQUEST_EVENTS:
      return { ...state, isFetching: true, };
    case REQUEST_EVENTS_SUCCESSFUL:
      return { 
        ...state, 
        isFetching: false, 
        events: concatArray(action.data, action.type),
        err: false 
      };
    case REQUEST_EVENTS_FAILURE:
      return { ...state, isFetching: false, err: true };
    case REQUEST_EVENTS_HEADLINE_SUCCESSFUL:
      return { ...state, isFetching: false, headlineEvents: action.data, err: false, };
    case REQUEST_EVENTS_ACTIVE_SUCCESSFUL:
      return { ...state, isFetching: false, err: false, activeEvents: concatArray(action.data, action.type)};
    default:  return state;
  }
}

const initialNewsState = {
  isFetching: false,
  news: {},
  err: false,
};


function news (state = initialNewsState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, isFetching: true, };
    case REQUEST_NEWS_SUCCESSFUL:
      return { ...state, isFetching: false, news: concatArray(action.data, action.type), err: false, };
    case REQUEST_NEWS_FAILURE:
      return { ...state, isFetching: false, err: false,  };
    default:
      return state;
  }
}

export default combineReducers({
  events,
  news,
});