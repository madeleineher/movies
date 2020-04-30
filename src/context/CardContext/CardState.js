import React, { useReducer } from 'react';
import axios from 'axios';

import CardContext from './cardContext';
import cardReducer from './cardReducer';
import {
  GET_MOVIES,
  DEL_MOVIE,
  LIKE_MOVIE,
  FILTER_CARDS,
  CLEAR_FILTER,
  MOVIES_PAGE,
  MOVIES_PER_PAGE,
  CONTENT_ERROR,
  DISLIKE_MOVIE,
} from '../types';

const CardState = (props) => {
  const initialState = {
    movies: null,
    filtered: null,
    moviesPerPage: 5,
    setMoviesPerPage: 5,
    currentPage: 1,
  };

  const [state, dispatch] = useReducer(cardReducer, initialState);

  // // // my actions

  // get movies db
  const getMovies = async () => {
    try {
      const res = await axios.get('db.json');
      dispatch({
        type: GET_MOVIES,
        payload: res.data, // all users contents
      });
    } catch (err) {
      dispatch({
        type: CONTENT_ERROR,
        payload: err,
      });
    }
  };

  // like
  const likeMe = (movie) => {
    dispatch({
      type: LIKE_MOVIE,
      payload: movie.id,
    });
  };

  // dislike
  const dislikeMe = (movie) => {
    dispatch({
      type: DISLIKE_MOVIE,
      payload: movie.id,
    });
  };

  // delete
  const deleteMe = (movie) => {
    dispatch({
      type: DEL_MOVIE,
      payload: movie.id,
    });
  };

  // filter
  const filterCards = (text) => {
    dispatch({ type: FILTER_CARDS, payload: text });
  };

  // clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // get current movies
  const indexOfLastMovie = state.currentPage * state.moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - state.moviesPerPage;
  const currentMovies =
    state.movies !== null
      ? state.movies.slice(indexOfFirstMovie, indexOfLastMovie)
      : 0;

  // create paginator
  const paginate = (pageNumber) => {
    dispatch({ type: MOVIES_PAGE, payload: pageNumber });
  };

  // reset paginator
  const resetMoviesPerPage = (newMoviesPerPage) => {
    dispatch({ type: MOVIES_PER_PAGE, payload: newMoviesPerPage });
  };

  return (
    <CardContext.Provider
      value={{
        movies: state.movies,
        filtered: state.filtered,
        moviesPerPage: state.moviesPerPage,
        setMoviesPerPage: state.setMoviesPerPage,
        currentPage: state.currentPage,
        currentMovies,
        getMovies,
        likeMe,
        dislikeMe,
        deleteMe,
        filterCards,
        clearFilter,
        paginate,
        resetMoviesPerPage,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
