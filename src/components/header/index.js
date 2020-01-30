import React, { useContext } from 'react';

import { GithubContext } from '../../contexts';
import Avatar from '../avatar';

import './style.scss'

export default function Header() {
  const { user } = useContext(GithubContext);

  return (
    <header className="header__container">
      <span className="header__text">{user.login}</span>
      <Avatar src={user.avatar_url} alt={user.login} />
    </header>
  )
}
