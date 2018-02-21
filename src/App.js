import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <h1> React Weather!!</h1>
      <p>Enter your latitude and longitude</p>
      <form>
        <label>
          <input type="text"/>
        </label>
        <label >
          <input type="text"/>
        </label>
      </form>
     </div>
    );
  }
}

export default App;
