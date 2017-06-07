
import {
  REQUEST_ASYNCSTORAGE_CHANGE,
  ASYNCSTORAGE_SUCCESS,
  ASYNCSTORAGE_ERROR,
} from '../constants';

export const initialStorageState = {
  isChanging: false,
  isFailure: false,
  isSuccess: false,
  data: {},
}

function storage (state = initialStorageState, action) {
  switch (action.type) {
    case REQUEST_ASYNCSTORAGE_CHANGE:
      return { ...state, isChanging: true };
    case ASYNCSTORAGE_SUCCESS:
      return { ...state, isChanging: false ,isSuccess: true, data: action.data, isFailure: false, };
    case ASYNCSTORAGE_ERROR:
      return { ...state, isChanging: fasle ,isFailure: true, isSuccess: false, };
    default:
      return state;
  }
}

export default storage;