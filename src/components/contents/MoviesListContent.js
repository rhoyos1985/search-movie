import React from 'react';
import PropTypes from 'prop-types';

import { Movie } from './Movie';

const MoviesListContent = ({ movies }) => {

  return(
    <div className="columns is-multiline is-mobile movies-list">
      {
        movies.length === 0
        ? <p>Sorry! <span role="img" aria-label="pensive-face">😔</span>  Results not found!</p>
        :  movies.map(movie => (
            <div key={movie.imdbID} className="column is-half movies-list-item">
              <Movie
                id={movie.imdbID}
                Title={movie.Title}
                Poster={movie.Poster}
                Year={movie.Year}
              />
            </div>
          )
        )
      }
    </div>
  );
}

MoviesListContent.propTypes = {
  movies: PropTypes.array
}

export { MoviesListContent };
