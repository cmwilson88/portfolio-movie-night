import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import Greetings from './components/Greetings';
import FlashMessagesList from './components/flash/FlashMessagesList';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar/>
        <FlashMessagesList />
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
