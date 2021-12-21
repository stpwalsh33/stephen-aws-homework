import { AUTH_LOGIN } from '../types';

export const doLogin = () => {
  return {
    type: AUTH_LOGIN,
    data: {}
  }
}