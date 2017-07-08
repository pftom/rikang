import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getDoctors = (state) => state.getIn(['home', 'doctors']);
const getPosts = (state) => state.getIn(['home', 'posts']);
const getLoadingError = (state) => state.getIn(['home', 'loadingError']);

export const getTabOneMainScreenSelector = createSelector(
  [ getToken, getDoctors, getPosts, getLoadingError ],
  (token, doctors, posts, loadingError) => ({
    token,
    doctors,
    posts,
    loadingError,
  }),
);