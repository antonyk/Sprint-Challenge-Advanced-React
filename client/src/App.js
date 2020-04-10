import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div><h3>Women's World Cup</h3></div>
      <div className='header-spacer'></div>
    </header>
    <section className='app-body'>
      <section className='fav-players'>
        <h1>Favorite Players</h1>

      </section>
      <section className='player-list'>
      {/* <h2>Main User</h2>
      <UserCard key={this.state.userData.login} user={this.state.userData} />
      
      <h2>Followers</h2>
      {this.state.followersData.map(item => <UserCard key={item.login} user={item}/> )}
      <h2>Following</h2>
      {this.state.followingData.map(item => <UserCard key={item.login} user={item}/> )} */}

      </section>
    </section>
  </div>
);
}

export default App;
