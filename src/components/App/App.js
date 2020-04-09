import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

import CustomerInfo from '../Pages/CustomerInfo/CustomerInfo';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br/>
          <img src="images/pizza_photo.png"/>
          <p>Pizza is great.</p>
          <nav>
            <ul>
            <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/info'>Customer Info</Link>
              </li>
              <li>
                <Link to='/checkout'>Checkout</Link>
              </li>
            </ul>
          </nav>
          <Route exact git path='/' component={Home} />
          <Route path='/info' component={CustomerInfo} />
          <Route path='/checkout' component={Checkout} />
        </Router>  
      </div>
    );
  }
}

export default App;
