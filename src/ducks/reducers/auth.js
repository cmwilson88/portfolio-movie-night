import { SET_CURRENT_USER } from '../../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  userDetails: {}
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_USER:
    console.log('isAuthenitcated', !isEmpty(action.user));
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      }
    default: 
      return state;
  }
}