import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers/rootReducer.js';

// Applying redux promise middleware for dispatching promises in actionCreators
const middleware = applyMiddleware(promiseMiddleware, logger);

// Setting up redux dev tools viewers to enable state to be viewed in browser
const devToolsStore = composeWithDevTools(middleware);

// setting up store with middleware and redux dev tools viewers
const store = createStore(
  reducers,
  devToolsStore
);

export default store;
