import { createSelector } from 'reselect';

//import get token common select
import { getToken } from './commonSelector';

export const getTabOneMainScreenSelector = createSelector(
  [ getToken ],
  (token) => ({
    token,
  }),
);