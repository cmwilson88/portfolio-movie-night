import React from 'react';
import {connect} from 'react-redux';

import AuthModal from '../Modals/AuthModal';
import {hideModal} from '../../../actions/modalActions';

function ModalConductor(props) {
  switch(props.currentModal) {
    case 'AUTH':
      return <AuthModal {...props} />
    
    default: 
      return null;
  }
}

function mapStateToProps(state) {
  return {
    currentModal: state.modals.currentModal,
  }
}

function mapDispatchToProps() {
  return {
    hideModal: hideModal
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalConductor);