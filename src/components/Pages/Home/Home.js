import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h2>Step 1: Select Your Pizza</h2>
        <PizzaList />
      </div>
    );
  }
}

export default connect()(Home);