import React from 'react';
import PropTypes from 'prop-types';

function ModalWrapper(props) {
  function handleBackgroundClick(e) {
    console.log(e.target === e.currentTarget);
    if(e.target === e.currentTarget) {
      props.hideModal()
    }
  };

  function onOk() {
    props.onOk();
    props.hideModal();
  }

  const okButton = props.showOk 
    ? (
      <button
        onClick={onOk}
        disabled={props.okDisabled}>
        {props.okText}
      </button>
    ) : null

  return (
    <div 
      className="modal-wrapper"
      onClick={handleBackgroundClick}>
      <header>
        <h1>{props.title}</h1>
        
        <button onClick={props.hideModal}>Close</button>
      </header>

      {props.children}

      {okButton}
    </div>
  )
}

export default ModalWrapper;