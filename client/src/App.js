import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './Card';
import CardList from './CardList';

import axios from 'axios'

const DATA_ENDPOINT = 'http://localhost:5000/api/players';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(result => {
        (result.data) ?
          this.setState({players: result.data}) :
          this.setState({players: []});
      })
      .catch()
  }

  addFavoritePlayer(e) {
    e.preventDefault();
    // console.log('add: ' + e.target.name + " value: " + e.target.value);
    // this.setState({test: e.target.name})
    // console.log(JSON.stringify(this.state.favorite))
    // console.log(JSON.stringify(this.state.players));
    // this.setState({favorite: [...this.state.favorite, this.state.players[parseInt(e.target.name)]]})
  }

  removeFavoritePlayer(e) {

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div><h3>Women's World Cup</h3></div>
          <div className='header-spacer'></div>
        </header>
        <section className='app-body'>
          <CardList players={this.state.players} />
        </section>
      </div>
    );
  }

}

export default App;
