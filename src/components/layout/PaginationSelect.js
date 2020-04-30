import React, { useContext } from 'react';

import CardContext from '../../context/CardContext/cardContext';

const PaginationSelect = () => {
  const cardContext = useContext(CardContext);

  const { resetMoviesPerPage, movies } = cardContext;

  const onChange = (arg) => {
    if (arg === 'ALL') {
      arg = movies.length;
    }
    resetMoviesPerPage(arg);
  };

  return (
    <div className='ps__container'>
      <h3>Movies Per Page:</h3>
      <ul className='ps__list'>
        <button onClick={() => onChange(5)} className='ps__option'>
          5
        </button>
        <button onClick={() => onChange(10)} className='ps__option'>
          10
        </button>
        <button onClick={() => onChange(15)} className='ps__option'>
          20
        </button>
        <button onClick={() => onChange('ALL')} className='ps__option'>
          ALL
        </button>
      </ul>
    </div>
  );
};

export default PaginationSelect;
