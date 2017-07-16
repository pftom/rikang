import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

const getPatientProfile = (state) => state.getIn(['patient', 'patientProfile']);

export const getPatientSelector = createSelector(
  [ getToken, getPatientProfile ],
  (token, patientProfile) => ({
    token,
    patientProfile,
  }),
);