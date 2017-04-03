import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import norris from './giphy.gif'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      joke: {},
      isLoading:false
    };
  }
  componentDidMount() {
    this.setState({isLoading:true})
    axios.get('https://api.chucknorris.io/jokes/random').then(function(response) {
      this.setState({joke:response})
    }.bind(this));
    this.setState({isLoading:false})
  }
  render() {
    let data = this.state.joke.data;
    let img,joke;
    if (data) {
      img = data.icon_url
      joke = data.value
    }
    return (
      <div className="App">
        {this.state.isLoading?<div>Loading...</div>:<div>
          <img className="Image" src={norris} alt={'Insert cool Chuck norris'}/>
          <div className="joke">{joke}</div>
          </div>}
      </div>
    );
  }
}

export default App;
