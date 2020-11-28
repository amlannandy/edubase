import store from '../store';
import { setAlert } from './alert';
import { db } from '../../firebase/firebase';

export const ADD_CLASS = 'ADD_CLASS';
export const FETCH_CLASSES = 'FETCH_CLASSES';
export const TOGGLE_CLASS_LOADING = 'TOGGLE_CLASS_LOADING';

export const fetchClasses = () => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CLASS_LOADING });
    const res = await db
      .collection('classes')
      // .where('userId', '==', store.getState().auth.userId)
      .get();
    const fetchedClasses = res.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        batch: data.batch,
        className: data.className,
        semester: data.semester,
        subjectName: data.subjectName,
        teacherName: data.teacherName,
        userId: data.userId,
      };
    });
    dispatch({ type: FETCH_CLASSES, payload: fetchedClasses });
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_CLASS_LOADING });
  }
};

export const addClass = (
  className,
  teacher,
  subject,
  semester,
  batch,
  history
) => async dispatch => {
  try {
    dispatch({ type: TOGGLE_CLASS_LOADING });
    const newClass = {
      className: className,
      teacherName: teacher,
      subjectName: subject,
      batch: batch,
      semester: semester,
      userId: store.getState().auth.userId,
    };
    await db.collection('classes').doc().set(newClass);
    dispatch(setAlert('Class Successfully Added.', 'success'));
    dispatch(fetchClasses());
    history.push('/classes');
  } catch (error) {
    dispatch(setAlert(error.message, 'danger'));
    dispatch({ type: TOGGLE_CLASS_LOADING });
  }
};
