import React, { useContext, useEffect, Fragment } from 'react';

import Cards from './Cards';
import Pagination from '../layout/Pagination';
import CardContext from '../../context/CardContext/cardContext';

function CardElems() {
  const cardContext = useContext(CardContext);
  const { movies, getMovies, currentMovies } = cardContext;

  useEffect(() => {
    getMovies();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {movies !== null ? (
        <div>
          <Cards />
          {currentMovies.length !== 0 ? <Pagination /> : <br />}
        </div>
      ) : (
        <div className='card'>
          <h4 className='card__container'>
            No movies available at the moment.
          </h4>
        </div>
      )}
    </Fragment>
  );
}

export default CardElems;
