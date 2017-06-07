import {
  GET_STORAGE_DATA_SUCCESS,
  GET_STORAGE_DATA_FAILURE
} from '../constants/';


const getStorageDataSuccess = (data) => ({
  type: GET_STORAGE_DATA,
  data: data,
});

const getStorageDataFailure = () => ({
  type: GET_STORAGE_DATA_FAILURE,
});

