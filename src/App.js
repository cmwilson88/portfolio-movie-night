import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar/>
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
