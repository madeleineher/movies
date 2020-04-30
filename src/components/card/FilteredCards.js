import React, { useContext, useRef, useEffect } from 'react';
import CardContext from '../../context/CardContext/cardContext';

const FilteredCards = () => {
  const cardContext = useContext(CardContext);
  const text = useRef('');

  const { filterCards, clearFilter, filtered } = cardContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterCards(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div className='filter__container'>
      <form>
        <input
          ref={text}
          className='inputFilter'
          type='text'
          placeholder='Filter by genre...'
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default FilteredCards;
