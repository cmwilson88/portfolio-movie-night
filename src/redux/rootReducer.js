import { combineReducers } from 'redux';
import flashMessages from 'redux/reducers/flash';
import auth from 'redux/reducers/auth';
import modals from 'redux/reducers/modals';

export default combineReducers({
  flashMessages,
  auth,
  modals
})