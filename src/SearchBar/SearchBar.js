import React from 'react';
import './SearchBar.css';

export default function SearchBar(props) {
  return (
      <div className='searchBar'>
        <label htmlFor="searchTerm">Search: </label>
        <input type='text' placeholder='Search Term' name='searchTerm' required id='searchTerm'></input>
        <button type='submit'>Search</button>
      </div>
  )
}
