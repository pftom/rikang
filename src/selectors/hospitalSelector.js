import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

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

//hospital all doctors selector
const getHospitalDoctors = (state) => state.getIn(['hospital', 'hospitalDoctors']);

export const getHospitalSelector = createSelector(
  [ getHospital, getHospitalDoctors ],
  (hospital, hospitalDoctors) => ({
    hospital,
    hospitalDoctors,
  }),
);


export const getHospitalDoctorsSelector = createSelector(
  [ getHospitalDoctors ],
  (hospitalDoctors) => ({
    hospitalDoctors,
  }),
);