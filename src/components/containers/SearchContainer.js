import React, { Component } from 'react'
import { Title } from '../contents/Title';
import { SearchForm } from '../SearchForm';
import { MoviesListContent } from '../contents/MoviesListContent'

export class SearchContainer extends Component {
  state = {usedSearch: false, results: []}

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  }

  _renderResult = () => {
    return this.state.usedSearch
      ? <MoviesListContent
          movies={this.state.results} />
      : <small> Use the form to search a movie </small>
  }

  render() {
    return(
      <div>
        <Title>Search Movies</Title>
        <div className="search-from-wrapper">
          <SearchForm onResult={this._handleResults}/>
        </div>
        {this._renderResult()}
      </div>
    );
  }
}
