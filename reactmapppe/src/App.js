import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dice from './component/dice'
class App extends Component {

    state = {
        diceValue: 1,
    }

    onRoll = () => {
        this.setState ({
            diceValue: Math.floor(Math.random()*6) + 1,
        })
    };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Dice value={this.state.diceValue}/>
            <button onClick={this.onRoll}>Roll</button>
        </div>
      </div>
    );
  }
}

export default App;
