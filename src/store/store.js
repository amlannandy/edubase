import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import auth from './reducers/auth';
import alert from './reducers/alert';
import profile from './reducers/profile';
import classes from './reducers/classes';

const rootReducer = combineReducers({
  auth: auth,
  alert: alert,
  classes: classes,
  profile: profile,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
