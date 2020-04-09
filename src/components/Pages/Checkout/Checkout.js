import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Checkout extends Component {

  handleClick = () => {
    console.log( 'Got a checkout' );
    axios.post( '/order', this.props.customer )
      .then( (result) => {
        console.log( 'Posted to the server' );
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
          { this.props.reduxStore.customer.name }
          <br />
          { this.props.customer.address }
          <br />
          { this.props.customer.city }
        </div>
        <p className="orderType">{ this.props.customer.type }</p>

        <table className="orderTable">
          <tr>
            <th>Pizza Name</th>
            <th>Cost</th>
          </tr>

        </table>
        <button onClick={ this.handleClick }>CHECKOUT</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxStore) => ({

  customer: reduxStore.customer,
  reduxStore

})

export default connect( mapStateToProps )(Checkout);