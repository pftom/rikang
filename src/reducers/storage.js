
import {
  REQUEST_ASYNCSTORAGE_CHANGE,
  ASYNCSTORAGE_SUCCESS,
  ASYNCSTORAGE_ERROR,
} from '../constants';

export const initialStorageState = {
  isChanging: false,
  isFailure: false,
  isSuccess: false,
}

function storage (state = initialStorageState, action) {
  switch (action.type) {
    case REQUEST_ASYNCSTORAGE_CHANGE:
      return { ...state, isChanging: true };
    case ASYNCSTORAGE_SUCCESS:
      return { ...state, isSuccess: true };
    case ASYNCSTORAGE_ERROR:
      return { ...state, isFailure: true };
    default:
      return state;
  }
}

export default storage;