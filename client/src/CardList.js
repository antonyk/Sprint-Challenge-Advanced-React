import React, { useEffect } from 'react'
import { useLocalStorage } from "./hooks/useLocalStorage"
import Card from './Card'

function CardList(props) {

  const [favorite, setFavorite] = useLocalStorage('fav-players', []);

  useEffect(() => {

  }, []);

  function addFavoritePlayer(e) {
    e.preventDefault();
    console.log(e);
    // console.log('add: ' + e.target.name + " value: " + e.target.value);
    // this.setState({test: e.target.name})
    // console.log(JSON.stringify(this.state.favorite))
    // console.log(JSON.stringify(this.state.players));
    // this.setState({favorite: [...this.state.favorite, this.state.players[parseInt(e.target.name)]]})

  }
  function removeFavoritePlayer() {

  }

  return (
    <>
      <section className='fav-players'>
        <h2>Favorite Players</h2>
        {favorite.map(item => <Card key={item.id} player={item} 
            addFavHandler={removeFavoritePlayer} />)}
      </section>
      <section className='player-list'>
        <h2>All Players</h2>
        {props.players.map(item => <Card key={item.id} player={item} 
            addFavHandler={() => {setFavorite([...favorite, item])}} />)}
      </section>
    </>
  )
}

export default CardList;