import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    name: ''
  }

  getData = () => {
    axios.get('http://localhost:5000').then(res => this.setState({ name : res.data.name })).catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        App
        <p> <button onClick={this.getData}>Get Name</button></p>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
}
export default App;
