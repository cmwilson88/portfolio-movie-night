import React from 'react'
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm 
            history={this.props.history}
          />
        </div>
      </div>
    )
  }
}

LoginPage.propTypes = {
  history: PropTypes.object.isRequired
}

export default LoginPage;