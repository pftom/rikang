import { NOT_LOGIN } from '../constants/';

export const notLogin = function notLogin() {
  return {
    type: NOT_LOGIN,
  };
};