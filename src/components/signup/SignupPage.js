import React from 'react';
import SignupForm from './SignupForm';
import {connect} from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';
import PropTypes from 'prop-types';

class SignupPage extends React.Component {
  render() {
    const {userSignupRequest, addFlashMessage, history, isUserExists} = this.props
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm 
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage}
            history={history}
            isUserExists={isUserExists}
            />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  history: PropTypes.object.isRequired,
  userSignupRequest: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}
export default connect(null, { userSignupRequest, isUserExists, addFlashMessage})(SignupPage);