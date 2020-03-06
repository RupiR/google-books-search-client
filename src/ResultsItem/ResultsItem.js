import React from 'react';
import './ResultsItem.css'

export default function ResultsItem(props) {
  const data = props.data.volumeInfo
  const shortDescription = data.description ? data.description.slice(0, 200) + '...' : 'This item is missing a description';
  return (
    <div className='results-container'>
      <h2>{data.title}</h2>
      <div className='flex-container'>
        <div className='img-container'>
          <img src={data.imageLinks.smallThumbnail} alt='Book Cover'></img>
        </div>
        <div className='info'>
          {data.authors && <p>{data.authors.join(' ')}</p>}
          <div>
            {props.data.saleInfo.listPrice && <span>{props.data.saleInfo.listPrice.amount} </span>}
            {props.data.saleInfo.listPrice && <span> {props.data.saleInfo.listPrice.currencyCode}</span>}
          </div>
          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  )
}