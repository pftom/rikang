import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getDoctors = (state) => state.getIn(['home', 'doctors']);
const getPosts = (state) => state.getIn(['home', 'posts']);
const getLoadingError = (state) => state.getIn(['home', 'loadingError']);

//home selector
export const getHomeSelector = createSelector(
  [ getToken, getDoctors, getPosts, getLoadingError ],
  (token, doctors, posts, loadingError) => ({
    token,
    doctors,
    posts,
    loadingError,
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