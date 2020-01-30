import React, { useState } from 'react';

import './index.scss'

export default function Search({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(value)
  }

  return (
    <form className="search__container" onSubmit={handleSubmit}>
      <input
        className="search__input"
        onChange={(e) => setValue(e.target.value)}
        autoComplete='off'
        value={value}
        type="text"
      />
    </form>
  )
}
