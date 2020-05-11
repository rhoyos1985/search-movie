import React from  'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ id, Poster= 'Default', Title = 'Default',  Year = 'Default' }) => {

  return(
    <Link to={`/detail/${id}`} className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
          src={Poster}
          alt={Title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4 custom-title"> {Title} </p>
            <p className="subtitle is-6"> {Year} </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired
}

export { Movie };
