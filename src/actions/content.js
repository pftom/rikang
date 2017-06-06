import {
  REQUEST_EVENT,
  REQUEST_EVENT_SUCCESSFUL,
  REQUEST_EVENT_FAILURE,
  REQUEST_SINGLE_NEWS,
  REQUEST_SINGLE_NEWS_SUCCESSFUL,
  REQUEST_SINGLE_NEWS_FAILURE,
} from '../constants'

import { commonApi, header, singleApi } from '../util/config';
import request from '../util/request';

const requestNew = () => ({
  type: REQUEST_SINGLE_NEWS,
});

const requestNewSuccessful = (data) => ({
  type: REQUEST_SINGLE_NEWS_SUCCESSFUL,
  data: data,
});

const requestNewFailure = (err) => ({
  type: REQUEST_SINGLE_NEWS_FAILURE,
  err: err,
});


export const fetchNew = (id) => dispatch => {
  dispatch(requestNew());
  return request.get(commonApi.base + singleApi(id).news_id)
              .catch(err => dispatch(requestNewFailure(err)))
              .then(data => dispatch(requestNewSuccessful(data)));
}


const reqeustEvent = () => ({
  type: REQUEST_EVENT,
});

const requestEventSuccessful = (data) => ({
  type: REQUEST_EVENT_SUCCESSFUL,
  data: data,
});

const requestEventFailure = (err) => ({
  type: REQUEST_EVENT_FAILURE,
  err: err,
});


export const fetchEvent = (id, params) => dispatch => {
  dispatch(reqeustEvent());
  return request.get(commonApi.base + singleApi(id).event_id)
              .catch(err => dispatch(requestEventFailure(err)))
              .then(data => dispatch(requestEventSuccessful(data)));
}