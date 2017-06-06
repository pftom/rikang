import {
  REQUEST_EVENT,
  REQUEST_EVENT_SUCCESSFUL,
  REQUEST_EVENT_FAILURE,
  REQUEST_SINGLE_NEWS,
  REQUEST_SINGLE_NEWS_SUCCESSFUL,
  REQUEST_SINGLE_NEWS_FAILURE,
  REQUEST_ATTEND,
  REQUEST_ATTEND_SUCCESSFUL,
  REQUEST_ATTEND_FAILURE,
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
              .then(data => dispatch(requestNewSuccessful(data)))
              .catch(err => dispatch(requestNewFailure(err)));

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
              .then(data => dispatch(requestEventSuccessful(data)))
              .catch(err => dispatch(requestEventFailure(err)))
}

const requestAttend = () => ({
  type: REQUEST_ATTEND,
});

const requestAttendFailure = () => ({
  type: REQUEST_ATTEND_FAILURE,
});

const requestAttendSuccessful = (data) => ({
  type: REQUEST_ATTEND_SUCCESSFUL,
  data: data,
});

export const fetchAttend = (id, token) => dispatch => {
  dispatch(requestAttend());
  return request.get(commonApi.base + singleApi(id).attend, null, token,)
              .then(data => dispatch(requestAttendSuccessful(data)))
              .catch(err => {
                console.log('err', err);
                dispatch(requestAttendFailure(err))
              });
}