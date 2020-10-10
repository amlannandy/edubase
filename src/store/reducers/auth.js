import {
  AUTHENTICATE,
  LOGOUT,
  TOGGLE_AUTH_LOADING,
  DELETE_ACCOUNT,
} from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  userId: null,
  email: null,
  name: null,
  isLoading: false,
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
    case DELETE_ACCOUNT:
      return {
        isAuthenticated: false,
        userId: null,
        email: null,
        name: null,
      };
    case TOGGLE_AUTH_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    default:
      return state;
  }
};
