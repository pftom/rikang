import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getDoctors = (state) => state.getIn(['home', 'doctors']);
const getPosts = (state) => state.getIn(['home', 'posts']);
const getLoadingError = (state) => state.getIn(['home', 'loadingError']);
const getIsLoadingData = (state) => state.getIn(['home', 'isLoadingData']);

//home selector
export const getHomeSelector = createSelector(
  [ getToken, getDoctors, getPosts, getLoadingError, getIsLoadingData ],
  (token, doctors, posts, loadingError, isLoadingData) => ({
    token,
    doctors,
    posts,
    loadingError,
    isLoadingData,
  }),
);


//post selector
const getPost = (state) => state.getIn(['home', 'post']);

export const getPostSelector = createSelector(
  [ getPost ],
  (post) => ({
    post,
  }),
);