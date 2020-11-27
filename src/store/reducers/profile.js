import {
  FETCH_PROFILE,
  TOGGLE_PROFILE_LOADING,
  ADD_PROFILE,
  UPDATE_PROFILE,
} from '../actions/profile';

const initialState = {
  isLoading: false,
  profile: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PROFILE:
      return {
        ...state,
        isLoading: false,
        profile: payload,
      };
    case TOGGLE_PROFILE_LOADING:
      const currentIsLoading = state.isLoading;
      return {
        ...state,
        isLoading: !currentIsLoading,
      };
    default:
      return state;
  }
};
