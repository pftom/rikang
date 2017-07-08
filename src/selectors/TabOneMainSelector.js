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


//doctor selector
const getDoctor = (state) => state.getIn(['home', 'doctor']);

export const getDoctorSelector = createSelector(
  [ getDoctor ],
  (doctor) => ({
    doctor,
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


//all hospital selector
const getHospitals = (state) => state.getIn(['hospital', 'hospitals']);

export const getHospitalsSelector = createSelector(
  [ getHospitals ],
  (hospitals) => ({
    hospitals,
  }),
);

//hospital selector
const getHospital = (state) => state.getIn(['hospital', 'hospital']);

export const getHospitalSelector = createSelector(
  [ getHospital ],
  (hospital) => ({
    hospital,
  }),
);

//hospital all doctors selector
const getHospitalDoctors = (state) => state.getIn(['hospital', 'hospitalDoctors']);

export const getHospitalDoctorsSelector = createSelector(
  [ getHospitalDoctors ],
  (hospitalDoctors) => ({
    hospitalDoctors,
  }),
);