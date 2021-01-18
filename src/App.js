import React, { Component } from 'react';
import './App.css';
import WeekContainer from './Components/WeekContiner';
import SearchBar from './Components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">

        <SearchBar />
        <WeekContainer />
        
      </div>
    );
  }
}

export default App;