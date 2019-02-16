import React, { Component } from 'react';
import InfoDisplay from './containers/infoDisplay'
import Header from './components/header.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <InfoDisplay />
      </div>
    );
  }
}

export default App;
