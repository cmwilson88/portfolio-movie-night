import React, {Component} from 'react';
import ModalWrapper from '../ModalWrapper/ModalWrapper'

class AuthModal extends Component {
  constructor(props) {
    super(props) 
  }

  render() {
    return(
      <ModalWrapper {...this.props}>

        <p>Sign In</p>
      </ModalWrapper>
    )
  }
}

export default AuthModal;