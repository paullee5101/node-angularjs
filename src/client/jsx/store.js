import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'
import rootReducer from './reducers';

const initialState = window.__INITIAL_STATE__

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware, promise)));

export default store;