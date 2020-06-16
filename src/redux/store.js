import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from 'redux-localstorage-simple';
import reducers from './reducers/rootReducer.js';

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(promiseMiddleware, thunk, save(['auth', 'user']))
)(createStore);

const store = createStoreWithMiddleware(reducers, load());

export default store;
