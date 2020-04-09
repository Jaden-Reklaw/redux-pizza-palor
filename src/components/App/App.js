import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {


  componentDidMount() {
    this.getPizza();
  }

  getPizza = () => {
    axios.get('./pizza')
      .then(response => {
        console.log('Pizza', response.data);
        this.props.dispatch({ type: '', payload: response.data })
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br />
        <img src="images/pizza_photo.png" />
        <p>Pizza is great.</p>
        <div>
          <h2>Step 1: Select Your Pizza</h2>
        <ul>
          {this.state.pizza.map((pizza, i) => {
            <li key={i} >{this.state.pizza.name}
              {this.state.pizza.description}
              {this.state.pizza.price}
              {this.state.pizza.image}
            </li>
          })}
        </ul>
        <button>NEXT</button>
        </div>
      </div>
    );
  }
}

export default App;
