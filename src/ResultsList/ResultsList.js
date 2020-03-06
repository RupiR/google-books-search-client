import React from 'react';
import ResultsItem from '../ResultsItem/ResultsItem';
import './ResultsList.css';

export default function ResultsList(props) {
  const results = props.results.items ? 
  props.results.items.map((item, idx) => <ResultsItem key={idx} data={item}/>) :
  [];
  return (
    <div>
      {results}
    </div>
  )
}

ResultsList.defaultProps = {
  results: {
    items: [],
  }
}