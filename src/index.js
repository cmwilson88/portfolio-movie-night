import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from 'redux/store';


import setAuthorizationToken from 'utils/setAuthorizationToken';
import { setCurrentUser } from 'redux/actions/auth-actions'
import jwtDecode from 'jwt-decode';

if(localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router> 
  </Provider>,
document.getElementById('root'));
