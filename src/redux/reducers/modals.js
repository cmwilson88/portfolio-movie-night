import { HIDE_MODAL, OPEN_MODAL } from 'redux/actions/types';


const initialState = {
  currentModal: null
}

export default function(state=initialState, action) {
  console.log(action)
  switch(action.type) {
    case OPEN_MODAL:
       return Object.assign(
         {},
         state,
         {
           currentModal: action.payload
         }
       )
    case HIDE_MODAL: 
       console.log('hide modal reducer')
       return Object.assign(
         {},
         state,
         {
           currentModal: null
         }
       )
    default:
      return state;
  }
}