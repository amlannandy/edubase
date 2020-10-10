import { auth } from '../../firebase/firebase';
import { setAlert } from './alert';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const TOGGLE_AUTH_LOADING = 'TOGGLE_AUTH_LOADING';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const response = await auth.createUserWithEmailAndPassword(email, password);
    await response.user.updateProfile({ displayName: name });
    dispatch({
      type: AUTHENTICATE,
      payload: {
        email: response.user.email,
        name: response.user.displayName,
        isAuthenticated: true,
        userId: response.user.uid,
      },
    });
    dispatch({ type: TOGGLE_AUTH_LOADING });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_AUTH_LOADING });
    const response = await auth.signInWithEmailAndPassword(email, password);
    dispatch({
      type: AUTHENTICATE,
      payload: {
        email: response.user.email,
        name: response.user.displayName,
        isAuthenticated: true,
        userId: response.user.uid,
      },
    });
    dispatch({ type: TOGGLE_AUTH_LOADING });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};

export const logout = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const deleteAccount = () => async dispatch => {
  try {
    const user = await auth.currentUser;
    await user.delete();
    dispatch({ type: LOGOUT });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
  }
};
