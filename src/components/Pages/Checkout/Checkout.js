import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {

  handleClick = () => {
    console.log( 'Got a checkout' );
    axios.post( '/order', this.props.customer )
      .then( (result) => {
        console.log( 'Posted to the server' );
        this.props.history.push( '/' );
      })
      .catch( (error) => {
        alert( `Couldn't complete your order. Please try again` );
        console.log( 'Got an error checking out.', error );
      })
  }; //end handle click

  render() {
    return (
      <div>
        <h2>Step 3: Checkout</h2>
        <div className="contactInfo">
          { this.props.customer.name }
          <br />
          { this.props.customer.address }
          <br />
          { this.props.customer.city }
        </div>
        <p className="orderType">{ this.props.customer.type }</p>

        <table className="orderTable">
          <thead>
            <tr>
              <th>Pizza Name</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { this.props.cart.pizzas.map( ( pizza, index ) => 
                      <tr key={ index }>
                          <td>{ pizza.name }</td>
                          <td>{ pizza.price }</td>
                      </tr>
                  )}
          </tbody>
        </table>
        <p>Total: { this.props.cart.total }</p>
        <button onClick={ this.handleClick }>CHECKOUT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({

  customer: reduxStore.customer,
  cart: reduxStore.cart,


})

export default withRouter(connect( mapStateToProps )(Checkout));