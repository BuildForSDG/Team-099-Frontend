import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  user: userReducer
});
