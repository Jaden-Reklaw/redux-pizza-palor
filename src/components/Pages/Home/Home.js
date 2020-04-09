import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//Import Axios
import axios from 'axios';

//Connect to the redux store
import {connect} from 'react-redux';

//Import components that are used on this home page
import PizzaList from '../../PizzaList/PizzaList'

class Home extends Component {
  componentDidMount() {
    this.getPizza();
  }
  
  getPizza = () => {
    axios.get('./api/pizza')
      .then(response => {
        console.log('Pizza', response.data);
        this.props.dispatch({ type: 'SET_PIZZAS', payload: response.data })
      }).catch( error => {
        console.log('error displaying pizza', error);
      })
  }

  handleSubmit = () => {
    this.props.history.push('/info');
  }

  render() {
    return (
      <div>
        <h2>Step 1: Select Your Pizza</h2>
        <PizzaList />
        <nav>
        <button onClick={this.handleSubmit}>Next</button>
        </nav>
      </div>
    );
  }
}

export default withRouter(connect()(Home));