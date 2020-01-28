import React, { useContext } from 'react';

import { GithubContext } from '../../contexts';

import './style.scss'

export default function Home() {
  const { user } = useContext(GithubContext);

  return (
    <header className="header__container">
      <span className="header__text">{user.login}</span>
      <img className="header__avatar" src={user.avatar_url} alt={user.login}/>
    </header>
  )
}
