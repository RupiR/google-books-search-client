import React from 'react';
import './FilterBar.css';

export default function FilterBar(props) {
  return (
      <div className='filterBar'>
        <label htmlFor='printTypeSelect'>Print Type: </label>
        <select name='printType' id='printTypeSelect'>
          <option value='all'>No Filter</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='bookTypeSelect'>Book Type: </label>
        <select name='bookType' id='bookTypeSelect'>
          <option value='ebooks'>No Filter</option>
          <option value='free-ebooks'>Free eBooks</option>
          <option value='paid-ebooks'>Paid eBooks</option>
        </select>
      </div>
  )
}
