import {
  GET_MOVIES,
  DEL_MOVIE,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  FILTER_CARDS,
  CLEAR_FILTER,
  MOVIES_PAGE,
  MOVIES_PER_PAGE,
  CONTENT_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload) {
            return Object.assign({}, movie, {
              likes: (movie.likes += 1),
            });
          }
          return movie;
        }),
      };
    case DISLIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload) {
            return Object.assign({}, movie, {
              dislikes: (movie.dislikes += 1),
            });
          }
          return movie;
        }),
      };
    case DEL_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case FILTER_CARDS:
      return {
        ...state,
        filtered: state.movies.filter((movie) => {
          const regex = new RegExp(`${action.payload}`, `gi`);
          return movie.category.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case MOVIES_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CONTENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case MOVIES_PER_PAGE:
      return {
        ...state,
        moviesPerPage: action.payload,
      };
    default:
      return state;
  }
};
