import React, { Component } from 'react';


const API_KEY = '9c2f64d3';
export class SearchForm extends Component {
  state = { inputMovie: '' };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputMovie } = this.state;
    fetch(`http://www.omdbapi.com/?&apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = '0'} = results;
        console.log({Search, totalResults});
        this.props.onResult(Search);
      });
  }

  _handleOnChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              onChange={this._handleOnChange}
              placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button
              className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}
