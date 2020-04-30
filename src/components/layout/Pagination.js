import React, { useContext } from 'react';
import CardContext from '../../context/CardContext/cardContext';

function Pagination() {
  const cardContext = useContext(CardContext);
  const pageNumbers = [];

  const { movies, moviesPerPage, paginate } = cardContext;
  const totalMovies = movies.length;

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='page__container'>
      <ul className='page__list'>
        {pageNumbers.map((number) => (
          <li key={number} className='page__listItem'>
            <a
              onClick={() => paginate(number)}
              href='!#'
              className='page__link'
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
