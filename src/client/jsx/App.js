window.$ = window.jQuery = require('jquery');
var Bootstrap = require('bootstrap-sass');

import React from 'react'
import { createStore, applyMiddleware } from 'redux' 
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import thunkMiddleware from 'redux-thunk' 
import Routes from './routes'

const rootElement = document.getElementById('root')

const router = (
  <Provider store={ store }>
    <Routes store={ store } />
  </Provider>
)

render(
  router,
  rootElement
)