import React from 'react'


export default function Card() {

  return (
      <div>
      <div className='card-title'>
        <h4>{this.props.user.login}</h4>
      </div>
      <div className='profile-img'>
        <img src={this.props.user.avatar_url} alt={`profile for user ${this.props.user.login}`} />
      </div>
      <div>
        <a className="App-link" href={this.props.user.repos_url} rel="noopener noreferrer">
          <span>GitHub Repos</span>
        </a>
      </div>
      <button>
        Load Children
      </button>
    </div>
  )
}