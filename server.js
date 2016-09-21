'use strict'
import express from "express"
import http from "http"
import path from "path"
import bodyParser from "body-parser"
import authentication from './src/server/middlewares/auth';

import React from 'react'
import { match } from 'react-router'
import thunkMiddleware from 'redux-thunk' 
import promise from 'redux-promise'
import routes from './src/client/jsx/routes'
import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'  
import { Provider } from 'react-redux'  
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/client/jsx/reducers'

const auth = new authentication();
let app = express();

app.disable('x-powered-by');

// Environment variables
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define system root
app.use(express.static(path.join(__dirname, 'public'), {
   dotfiles: 'ignore',
   index: 'index.html'
}));

app.use('/*', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

//API routes
app.all('/api/*',auth.validateApiRequest);

// Invoke routers
import router from './src/server/routes';
router(app);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  
});

app.listen("3000", null, null, function() {  
    console.log("Server started at port:3000");
});
