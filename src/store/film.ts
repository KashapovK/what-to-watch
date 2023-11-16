import { createReducer } from '@reduxjs/toolkit';
import {FilmCard} from '../types/types';
import {ALL_GENRES, FILM_LIST_SIZE} from '../const/film';
import {setFilms, setSelectedGenre, showMoreFilms} from './action';

type FilmReducerState = {
  films: FilmCard[];
  filteredFilms: FilmCard[];
  genres: string[];
  selectedGenre: string;
  filmListSize: FilmCard[];
  filmListMaxLength: number;
};


const initialState: FilmReducerState = {
  films: [],
  filteredFilms: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES,
  filmListSize: [],
  filmListMaxLength: FILM_LIST_SIZE,
};

const filmReducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilms, (state, {payload}) => ({
    ...state,
    ...initialState,
    genres: [ALL_GENRES, ...new Set(payload.map(({genre}) => genre))],
    films: payload,
    filteredFilms:payload,
    filmListSize:payload.slice(0, FILM_LIST_SIZE),
  }
  ));
  builder.addCase(setSelectedGenre, (state, {payload}) => {
    const filteredFilms =
        payload === ALL_GENRES
          ? state.films
          : state.films.filter((film) => film.genre === payload);

    return (
      {
        ...state,
        SelectedGenre: payload,
        filteredFilms,
        filmListSize: filteredFilms.slice(0, FILM_LIST_SIZE),
        filmListMaxLength: FILM_LIST_SIZE
      }
    );
  });
  builder.addCase(showMoreFilms, (state) => {
    const length = state.filmListMaxLength + FILM_LIST_SIZE;

    return (
      {
        ...state,
        filmListMaxLength: length,
        filmListSize: state.filteredFilms.slice(0, length)
      }
    );
  });
});

export default filmReducer;
