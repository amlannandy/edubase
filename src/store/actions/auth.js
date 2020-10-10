import { auth } from '../../firebase/firebase';
import { setAlert } from './alert';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const register = (name, email, password) => async dispatch => {
  try {
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
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
  }
};

export const login = (email, password) => async dispatch => {
  try {
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
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
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
