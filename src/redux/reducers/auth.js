import { AUTH_LOGIN } from '../types';

const INITIAL = {
  isLoggedIn: false
}

const AUTH = (state = INITIAL, action) => {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        isLoggedIn: true
      }
    }
    default:
      return state;
  }
}

export default AUTH;