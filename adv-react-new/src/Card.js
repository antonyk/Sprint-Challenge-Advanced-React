import React from 'react'

export default function Card(props) {

  return (
    <div className='card-item'>
      <div className='card-title'>
        <h2>{props.player.name}</h2>
      </div>
      <div>
        <p>
          {props.player.country}
        </p>
        <a name={props.player.id} className="App-link" href='#' rel="noopener noreferrer" onClick={props.addFavHandler}>
          <span>Add Favorite</span>
        </a>
      </div>
      <button onClick={props.addFavHandler}>
        Add Favorite
      </button>
    </div>
  )
}