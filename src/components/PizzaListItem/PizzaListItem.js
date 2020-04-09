import React, { Component } from 'react';

//in order to use redux on a component
import {connect} from 'react-redux';

//Import styles to be used on componet
import './PizzaListItem.css'

class PizzaListItem extends Component {

    addPizzaToCart = () => {
        console.log(this.props.pizza);
        // TODO: Dispatch here
        this.props.dispatch( { type: 'ADD_PIZZA_CART', payload: this.props.pizza } );
        
    }

    render() {
        
        const pizza = this.props.pizza;

        return (
            <div className="card">
                {/* {JSON.stringify(pizza)} */}
                <img alt={pizza.description} src={pizza.image_path}></img>
                <div className="container">
                    <h2>{pizza.name}</h2>
                    <p>{pizza.description}</p>
                    <h4>{pizza.price}</h4>
                    <button onClick={this.addPizzaToCart}>Add Pizza to Cart</button>
                </div>
            </div>
                
            
        )
    }
}

// We nned to connect our Component in order to use our Redux store
//to dispatch actions, all we need is connect() no args
// if we want to see values from redux connect needs a funciton as an arg
export default connect()(PizzaListItem);