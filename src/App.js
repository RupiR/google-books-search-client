import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import FilterBar from './FilterBar/FilterBar';
import ResultsList from './ResultsList/ResultsList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: null,
      bookType: 'ebook',
      printType: 'all',
      results: {
        items: [],
      },
      error: null,
    }
  }

  handleSubmit = (e) => {
    console.log(e.target.searchTerm.value);
    e.preventDefault();
    this.setState({
      searchTerm: e.target.searchTerm.value,
      bookType: e.target.bookType.value,
      printType: e.target.printType.value
    }, this.handleSearch)
  }

  handleSearch = () => {
    const APIKEY = 'AIzaSyCQmt3V0v1p0gatC_b_7hEwk310Uo-Zwm8';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&filter=${this.state.bookType}&printType=${this.state.printType}&key=${APIKEY}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          results: data,
          error: null,
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <SearchBar />
          <FilterBar />
        </form>
        <section>
          <ResultsList results={this.state.results}/>
        </section>
      </div>
    );
  }
}

export default App;
