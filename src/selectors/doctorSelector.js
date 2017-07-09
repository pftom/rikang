import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

//doctor selector
const getDoctor = (state) => state.getIn(['home', 'doctor']);

export const getDoctorSelector = createSelector(
  [ getDoctor ],
  (doctor) => ({
    doctor,
  }),
);

const getDoctorInfo = (state) => state.getIn(['doctor', 'doctorInfo']);

export const getDoctorInfoSelector = createSelector(
  [ getDoctorInfo ],
  (doctorInfo) => ({
    doctorInfo,
  }),
);