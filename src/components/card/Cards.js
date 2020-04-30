import React, { useContext, Fragment } from 'react';

import CardItem from './CardItem';
import CardContext from '../../context/CardContext/cardContext';
import FilteredCards from './FilteredCards';
import PaginationSelect from '../layout/PaginationSelect';

function Cards() {
  const cardContext = useContext(CardContext);
  const { filtered, currentMovies } = cardContext;

  if (currentMovies.length === 0) {
    return (
      <div className='card'>
        <h4 className='card__container' style={{ textAlign: 'center' }}>
          No movies available at the moment.
          <br />
          <br />
          &#41;-:
        </h4>
      </div>
    );
  }

  return (
    <Fragment>
      <div className='layout__container'>
        <FilteredCards />
        <PaginationSelect />
      </div>
      <div className='card'>
        <div className='card__container'>
          {filtered !== null ? (
            <Fragment>
              {filtered.length !== 0 ? (
                filtered.map((movie) => (
                  <CardItem key={movie.id} movie={movie} />
                ))
              ) : (
                <p className='card__emptyFilter'>
                  <i>Sorry</i>, no such genre...
                </p>
              )}
            </Fragment>
          ) : (
            currentMovies.map((movie) => (
              <CardItem key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Cards;
