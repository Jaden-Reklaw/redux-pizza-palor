import React, { Component } from 'react';

//in order to use redux on a component
import {connect} from 'react-redux';

// import PizzaListItem to combine with this component
import PizzaListItem from '../PizzaListItem/PizzaListItem';

class PizzaList extends Component {

    render() {
        return (
            <div>
                <ul>
                {/* {JSON.stringify(this.props)} */}

                   {this.props.pizzas.map((pizza, i) => {
                       return (
                           <PizzaListItem key={i} pizza={pizza} />
                       );
                   })}
                </ul>
            </div>
        )
    }
}

const putReduxStateOnProps = ( reduxStore ) => ({

    pizzas: reduxStore.pizzaList
  
  });

export default connect( putReduxStateOnProps )(PizzaList);