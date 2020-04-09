import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import CustomerInfo from '../Pages/CustomerInfo/CustomerInfo';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';

class App extends Component {


  componentDidMount() {
    this.getPizza();
  }

  getPizza = () => {
    axios.get('./pizza')
      .then(response => {
        console.log('Pizza', response.data);
        this.props.dispatch({ type: '', payload: response.data })
      }).catch( error => {
        console.log('error displaying pizza', error);
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
          
      </div>
    );
  }
}

export default App;
