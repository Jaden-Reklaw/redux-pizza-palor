import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Bring in Redux Logger
import logger from 'redux-logger';

// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Add Reducers Here

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({}), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);

// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
