import store from '../store';
import { setAlert } from './alert';
import { TOGGLE_AUTH_LOADING } from './auth';
import { db } from '../../firebase/firebase';

export const ADD_CLASS = 'ADD_CLASS';
export const FETCH_CLASSES = 'FETCH_CLASSES';
export const TOGGLE_CLASS_LOADING = 'TOGGLE_CLASS_LOADING';

export const addClass = (className, teacher, subject) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CLASS_LOADING });
    db.collection('classes')
      .doc()
      .set({
        className: className,
        teacherName: teacher,
        subjectName: subject,
        userId: store.getState().auth.userId,
      })
      .then(res => {
        console.log(res);
        dispatch({ type: TOGGLE_CLASS_LOADING });
      });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_AUTH_LOADING });
  }
};
