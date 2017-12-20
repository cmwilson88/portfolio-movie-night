import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css'
import NavigationBar from './components/NavigationBar';

import FlashMessagesList from './components/flash/FlashMessagesList';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import ModalConductor from './components/PopupModals/ModalConductor/ModalConductor';
import LandingPage from 'components/pages/LandingPage/LandingPage';

import {connect} from 'react-redux';
import {openModal} from 'redux/actions/modal-actions'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar/>
        <FlashMessagesList />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <ModalConductor />
      </div>
    );
  }
}

export default connect(null, {
  openModal: openModal
})(App);
