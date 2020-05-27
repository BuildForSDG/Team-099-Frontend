import { combineReducers } from 'redux';

// Declare dummy reducer because store can't be empty
const dummyReducer = () => ({});

export default combineReducers({ dummy: dummyReducer });
