import React from 'react';
import PropTypes from 'prop-types';

import validateInput from '../../shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state)
    if(!isValid) {
      this.setState({
        errors
      })
    }
    return isValid
  }
  
  onSubmit(e) {
    e.preventDefault();
    if(this.isValid()) {
      this.setState({
        isLoading: true
      })
      this.props.userSignupRequest(this.state)
                .then(() => {})
                .catch(err => {
                  this.setState({
                    errors: err.response.data,
                    isLoading: false
                  })
                })
    }
  }

  render() {
    const {errors} = this.state
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Sign Up Today!</h1>

        <TextFieldGroup
          label="Username"
          field="username" 
          value={this.state.username}
          error={errors.username}
          onChange={this.onChange}/>

        <TextFieldGroup
          label="Email"
          field="email"
          type="email" 
          value={this.state.email}
          error={errors.email}
          onChange={this.onChange}/>

        <TextFieldGroup
          label="Password"
          field="password"
          type="password" 
          value={this.state.password}
          error={errors.password}
          onChange={this.onChange}/>
          
        <TextFieldGroup
          label="Confirm Password"
          field="passwordConfirmation"
          type="password" 
          value={this.state.passwordConfirmation}
          error={errors.passwordConfirmation}
          onChange={this.onChange}/>

        <div className="form-group">
          <button
            disabled={this.state.isLoading} 
            className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm