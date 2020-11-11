import {
  ADD_CLASS,
  FETCH_CLASSES,
  TOGGLE_CLASS_LOADING,
} from '../actions/classes';

const initialState = {
  classes: [],
  students: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CLASSES:
      return {
        ...state,
        classes: payload,
        isLoading: false,
      };
    case ADD_CLASS:
      const currentClasses = [...state.classes, payload];
      return {
        ...state,
        classes: currentClasses,
        isLoading: false,
      };
    case TOGGLE_CLASS_LOADING:
      const currentIsLoading = state.isLoading;
      return { ...state, isLoading: !currentIsLoading };
    default:
      return state;
  }
};
