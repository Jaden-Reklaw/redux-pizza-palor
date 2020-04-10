import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

//Import components to put on this page
import CustomerInfo from '../Pages/CustomerInfo/CustomerInfo';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import AdminOrders from '../Pages/AdminOrders/AdminOrders';
import Header from '../Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={CustomerInfo} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/admin' component={AdminOrders} />
        </Router>  
      </div>
    );
  }
}

export default App;
