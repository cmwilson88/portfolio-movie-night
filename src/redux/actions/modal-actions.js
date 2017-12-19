import {HIDE_MODAL, OPEN_MODAL} from './types';

export function openModal(modalType) {
  return {
    type: OPEN_MODAL,
    payload: modalType
  }
}


export function hideModal() {
  console.log('hide modal');
  return {
    type: HIDE_MODAL
  }
}