import React, { Component } from 'react';
//Import Axios
import axios from 'axios';

//Connect to the redux store
import {connect} from 'react-redux';

//Import components that are used on this home page
import PizzaList from '../../PizzaList/PizzaList';

//Import to do routing
import {withRouter} from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.getPizza();
  }

  handleChangePage = () => {
    //change page to info page
    this.props.history.push( '/info' );
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
        <button onClick={this.handleChangePage}>Next</button>
      </div>
    );
  }
}

export default withRouter(connect()(Home));