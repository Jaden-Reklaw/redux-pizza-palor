import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//Import components to put on this page
import CustomerInfo from '../Pages/CustomerInfo/CustomerInfo';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Header from '../Header/Header';

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
        <Header />
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={CustomerInfo} />
          <Route path='/checkout' component={Checkout} />
        </Router>  
      </div>
    );
  }
}

export default App;
