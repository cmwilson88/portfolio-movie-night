import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
  (state = {}) => state,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()        
  )
)

export default store;