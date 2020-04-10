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

  //Reducer for setting state for the list of order
const orderList = (state = [], action) => {
  // TODO - set orders list with data from server
  if(action.type === 'SET_ORDERS') {
    return action.payload;
  }
  return state;
}

  const cart = (state = { pizzas: [], total: 0 }, action) => {
    // TODO - set pizza list with data from server
    if(action.type === 'ADD_PIZZA_CART'){
      const updatedState = { pizzas: [ ...state.pizzas, action.payload ], total: state.total + Number( action.payload.price ) }
        return updatedState;
    }
    if(action.type === 'REMOVE_PIZZA_CART'){
        let array = [ ...state.pizzas ];
        let filterArray = array.filter((item) => item.id !== action.payload);
        let subtractFromTotal;
        for ( let pizza of state.pizzas ) {
          if ( pizza.id === action.payload ) {
            subtractFromTotal = pizza.price;
          }
        }
        const updatedState = { pizzas: filterArray, total: state.total - subtractFromTotal };
        return updatedState;
    }
    return state;
  }

  const customer = (state = {}, action) => {
    if(action.type === 'SET_CUSTOMER') {
      return state = action.payload;
    }
    return state;
  }

  


  //Add Reducer for Adding a Pizza to Cart

  //Add Reducer for Removing Pizza from Cart

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({pizzaList,cart, customer, orderList}), //Add reducer functions to combineReducers
    applyMiddleware(logger) //Add our middleware logger
);

// Wrap our App in a Provider, this makes Redux available in our entire application
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
