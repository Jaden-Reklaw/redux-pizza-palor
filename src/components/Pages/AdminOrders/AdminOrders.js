import React, { Component } from 'react';

//Import Axios
import axios from 'axios';

//Connect to the redux store
import {connect} from 'react-redux';

export class AdminOrders extends Component {

    componentDidMount() {
        this.getOrders();
      }

    getOrders = () => {
        axios.get('./api/orders')
          .then(response => {
            console.log('Orders', response.data);
            this.props.dispatch({ type: 'SET_ORDERS', payload: response.data })
          }).catch( error => {
            console.log('error displaying orders', error);
          })
      }
    
    render() {
        return (
            <div>
                <header>
                    <h1>Prime Pizza</h1>
                </header>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Time Order Placed</th>
                                <th>Type</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.orders.map( (item, i) => 
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>{item.total}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
});



export default connect(mapStateToProps)(AdminOrders);
