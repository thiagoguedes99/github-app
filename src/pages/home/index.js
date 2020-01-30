import React from 'react';
import { useHistory } from 'react-router-dom'

import { Search } from '../../components';

export default function Home() {
  const history = useHistory();

  const redirectToListPage = (searcValue) => {
    history.push(`/list?q=${searcValue}`)
  }

  return (
    <div>
      home comoponet
      <Search onSubmit={redirectToListPage} />
    </div>
  )
}
