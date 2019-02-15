import React, { Component } from 'react';
import InfoDisplay from './containers/infoDisplay'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Listening on port:3000!</h1>
        <InfoDisplay />
      </div>
    );
  }
}

export default App;
