import React, { Component } from 'react';

import './App.css';
import CounterContainer from "./components/containers/CounterContainer"
import PaletteContainer from "./components/containers/PaletteContainer"
import WaitingListContainer from "./components/containers/WaitingListContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer/>
        <CounterContainer/>
        <WaitingListContainer/>
      </div>
    );
  }
}

export default App;
