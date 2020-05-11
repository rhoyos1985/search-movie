import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ButtonBackToHome } from '../components/contents/buttonBackToHome'

const API_KEY = '9c2f64d3';
export class Detail extends Component {

  static propTypes = {
    //props match es un objeto de react router que contiene un objeto con todos los parametros de la url
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} };

  _fetchMovie({ id }) {
    console.log(id);
    fetch(`http://www.omdbapi.com/?&apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({movie});
        this.setState({ movie });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  _renderComponent() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;

    return (
      <div >
        <ButtonBackToHome />
        <h1>{ Title }</h1>
        <img src={Poster} alt={Title}/>
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }

  render() {
    return this._renderComponent()
  }

}
