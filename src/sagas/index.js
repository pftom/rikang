import { all } from 'redux-saga/effects';

//import userauth sagas
import { loginFlow, registerFlow, changePasswordFlow, clearFlow } from './userSaga';

//import posts sagas
import { watchGetPost, watchGetPosts } from './postSaga';

//import hospitals sagas
import { 
  watchGetHospital, 
  watchGetHospitals, 
  watchGetHospitalDoctors,
} from './hospitalSaga';


//doctor watch and handle func
import {
  watchGetDoctor,
  watchGetDoctors,

  watchDoctorInfo,
  watchDoctorComments,
  watchDoctorAnswers,
  watchAddDoctorFav,
} from './doctorSaga'

//patient watch and handle func
import { watchGetPatientProfile, watchUpdatePatientProfile } from './patientSaga';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    registerFlow(),
    changePasswordFlow(),
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

    watchGetPatientProfile(),
    watchUpdatePatientProfile(),
  ]);
}