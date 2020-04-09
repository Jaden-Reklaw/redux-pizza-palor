import React, { Component } from 'react';

//in order to use redux on a component
import {connect} from 'react-redux';

//Import styles to be used on componet
import './PizzaListItem.css'

class PizzaListItem extends Component {
    state = {
        show: true,
    }

    //Adds a Pizza to redux store
    addPizzaToCart = () => {
        console.log(this.props.pizza);
        // TODO: Dispatch here
        this.props.dispatch({type: 'ADD_PIZZA_CART', payload: this.props.pizza});
        this.setState({show: false});
        
    }

    //Removes a Pizza from Redux store
    removePizzaFromCart = () => {
        console.log(this.props.pizza);
        // TODO: Dispatch here
        this.props.dispatch({type:'REMOVE_PIZZA_CART', payload: this.props.pizza.id});
        this.setState({show: true});
    }

    //Conditional render for when add or remove button is pushed
    showAddOrRemove = () => {
        //needs to return JSX
        if(this.state.show) {
          return (<button onClick={this.addPizzaToCart}>Add</button>);
        } else {
          return (<button onClick={this.removePizzaFromCart}>Remove</button>);
        }
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
                    {this.showAddOrRemove()}
                </div>
            </div>
                
            
        )
    }
}

// We nned to connect our Component in order to use our Redux store
//to dispatch actions, all we need is connect() no args
// if we want to see values from redux connect needs a funciton as an arg
export default connect()(PizzaListItem);