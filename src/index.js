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

//Reducer for setting state for the list of pizza
const pizzaList = (state = [], action) => {
    // TODO - set pizza list with data from server
    if(action.type === 'SET_PIZZAS') {
      return action.payload;
    }
    return state;
  }

    //Add Reducer for Adding a Pizza to Cart
  //Add Reducer for Removing Pizza from Cart
  const cart = (state = [], action) => {
    // TODO - set pizza list with data from server
    if(action.type === 'ADD_PIZZA_CART'){
        return [...state, action.payload];
    }
    if(action.type === 'REMOVE_PIZZA_CART'){
        let array = [...state];
        let filterArray = array.filter((item) => item.id !== action.payload);
        return filterArray;
    }
    return state;
  }




// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({pizzaList,cart}), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);

// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
