import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class CustomerInfo extends Component {

  state = {
    newCustomer: {
      name: '',
      address: '',
      city: '',
      zip: '',
      type: '',
    }
  }

  handleChangeFor = (propertyName, event) => {
    this.setState({
      newCustomer: {
        ...this.state.newCustomer,
        [propertyName]: event.target.value
      }
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Adding customer`, this.state.newCustomer);
    // POST request to add new customer
    axios.post('/orders', this.state.newCustomer)
      .then(response => {
        console.log('Added successfully');
      })
      .catch(error => {
        console.log('Error adding customer', error);
      })
    this.props.dispatch({ type: 'SET_CUSTOMER', payload: this.state.newCustomer })
    //
    this.props.history.push('/checkout');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Prime Pizza</h1>
          {/*Shopping cart icon will go here*/}
          <p>Total: </p>
        </header>
        <main>
          <h2>Step 2: Customer Information</h2>
          <form>
            <input type="text" placeholder="Name" value={this.state.newCustomer.name}
              onChange={(event) => this.handleChangeFor('name', event)} />
            <input type="text" placeholder="Street Address" value={this.state.newCustomer.address}
              onChange={(event) => this.handleChangeFor('address', event)} />
            <input type="text" placeholder="City" value={this.state.newCustomer.city}
              onChange={(event) => this.handleChangeFor('city', event)} />
            <input type="text" placeholder="Zip Code" value={this.state.newCustomer.zip}
              onChange={(event) => this.handleChangeFor('zip', event)} />
            <div onChange={(event) => this.handleChangeFor('type', event)}>
              <label>
                <input type="radio" value="Pickup" defaultChecked name="Pickup" />
                        Pickup
                    </label>
              <label>
                <input type="radio" value="Delivery" name="Delivery" />
                        Delivery
                    </label>
            </div>
          </form>
          <nav>
            <button type="submit" onClick={this.handleSubmit}>Next</button>
          </nav>
        </main>
      </div>
    );
  }
}

export default withRouter(connect()(CustomerInfo));