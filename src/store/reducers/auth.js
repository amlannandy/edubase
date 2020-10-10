import { AUTHENTICATE, LOGOUT } from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  userId: null,
  email: null,
  name: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATE:
      return {
        ...state,
        ...payload,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        userId: null,
        email: null,
        name: null,
      };
    default:
      return state;
  }
};
