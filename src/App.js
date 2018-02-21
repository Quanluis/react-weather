import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0,
      lon: 0,
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLonChange = this.handleLonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLatChange(e){
    this.setState({
      lat: +e.target.value
    })
  }
  handleLonChange(e){
    this.setState({
      lon: +e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('Hello world');
    
    const url = 'https://api.darksky.net/forecast/d9996f25aa69852f7e5ab45d115d2b6c/37.8267,-122.4233';
    axios.get(url)
    .then(Response => console.log(Response))
    .catch(err =>  console.log(err));
  }

  render() {
    return (
      <div>
        <h1>React Weather</h1>
        <p>Enter your latitude and longitude to get the weather!</p>
        <form onSubmit = {(e) => this.handleSubmit(e)}>
          <label>
            Latitude:
            <input type="number" 
              min = '-90'
              max = '90'
              onChange={(e) => this.handleLatChange(e)} 
              value={this.state.lat}
              required/>
          </label>
          <label>
            Longitude:
            <input type="number" 
            min = '-180'
            max = '180'
              onChange={(e) => this.handleLonChange(e)} 
              value={this.state.lon}
              required/>
          </label>
          <button type="submit">Get The Weather!</button>
        </form>
      </div>
    );
  }
}

export default App;