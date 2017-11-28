import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    console.log('userSignupRequest fired');
    console.log(userData);
    return axios.post('/api/users', userData);
  }
}