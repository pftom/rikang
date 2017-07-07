import { all } from 'redux-saga/effects';

//import userauth sagas
import { loginFlow, registerFlow, clearFlow } from './userSaga';

//import posts sagas
import { watchGetPost, watchGetPosts } from './postSaga';

//import hospitals sagas
import { 
  watchGetHospital, 
  watchGetHospitals, 
  watchGetHospitalDoctors,
} from './hospitalSaga';

import {
  watchGetDoctor,
  watchGetDoctors,

  watchDoctorInfo,
  watchDoctorComments,
  watchDoctorAnswers,
  watchAddDoctorFav,
} from './doctorSaga'

export default function* rootSaga() {
  yield all([
    loginFlow(),
    registerFlow(),
    clearFlow(),

    watchGetPost(),
    watchGetPosts(),

    watchGetHospital(),
    watchGetHospitals(),
    watchGetHospitalDoctors(),

    watchGetDoctor(),
    watchGetDoctors(),
    watchDoctorInfo(),
    watchDoctorComments(),
    watchDoctorAnswers(),
    watchAddDoctorFav(),
  ]);
}