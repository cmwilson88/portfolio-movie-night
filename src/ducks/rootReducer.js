import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import modals from './reducers/modals';

export default combineReducers({
  flashMessages,
  auth,
  modals
})