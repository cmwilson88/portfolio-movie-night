import React from 'react';
import {connect} from 'react-redux';

import AuthModal from 'components/PopupModals/Modals/AuthModal';
import {hideModal} from 'redux/actions/modal-actions';

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