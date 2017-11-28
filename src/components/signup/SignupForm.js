import React from 'react';
import map from 'lodash/map';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    console.log(this.state);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Today!</h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            name="username" 
            type="text" 
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            name="email" 
            type="email" 
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input 
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            type="password" 
            className="form-control"/>
        </div>

        <div className="form-group">
          <label className="control-label">Confirm Password</label>
          <input 
            value={this.state.passwordConfirmation}
            onChange={this.state.passwordConfirmation}
            name="passwordConfirmation"
            type="password" 
            className="form-control"/>
        </div>
        <div className="form-group">
          <div className="btn btn-primary btn-lg">Sign Up</div>
        </div>
      </form>
    )
  }
}

export default SignupForm