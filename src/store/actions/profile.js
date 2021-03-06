import { setAlert } from './alert';
import { db, storage } from '../../firebase/firebase';
import PocketData from '../../components/Account/PocketData';

export const ADD_PROFILE = 'ADD_PROFILE';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const TOGGLE_PROFILE_LOADING = 'TOGGLE_PROFILE_LOADING';

export const fetchProfile = userId => async dispatch => {
  try {
    dispatch({ type: TOGGLE_PROFILE_LOADING });
    const doc = await db.collection('users').doc(userId).get();
    const profile = doc.data();
    dispatch({ type: FETCH_PROFILE, payload: profile });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_PROFILE_LOADING });
  }
};

export const addProfile = (userId, userData, history) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_PROFILE_LOADING });
    await db.collection('users').doc(userId).set(userData);
    dispatch(setAlert('Profile Added.', 'success'));
    dispatch(fetchProfile(userId));
    history.push('/account');
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_PROFILE_LOADING });
  }
};

export const uploadDisplayPicture = (userId, imageFile) => async dispatch => {
  try {
    const url = await storage.ref(imageFile);
    await db.collection('users').doc(userId).update({
      imageUrl: url,
    });
    dispatch(setAlert('Display Picture Updated', 'primary'));
    dispatch(fetchProfile(userId));
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_PROFILE_LOADING });
  }
};
