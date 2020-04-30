import React, { useContext } from 'react';

import CardContext from '../../context/CardContext/cardContext';

function CardItem({ id, movie }) {
  const cardContext = useContext(CardContext);

  const { deleteMe, dislikeMe, likeMe } = cardContext;

  return (
    <div className='ci__container'>
      <button className='ci__button button' onClick={() => deleteMe(movie)}>
        x
      </button>
      <h2>{movie.title}</h2>
      <h4 className='ci__cat'>{movie.category}</h4>
      <div className='ci__toggle'>
        <button className='ci__hate' onClick={() => dislikeMe(movie)}>
          <i className='fas fa-heart-broken'> {movie.dislikes}</i>
        </button>
        <button className='ci__love' onClick={() => likeMe(movie)}>
          <i className='fas fa-heart'> {movie.likes}</i>
        </button>
      </div>
    </div>
  );
}

export default CardItem;
