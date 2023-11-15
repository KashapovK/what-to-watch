import { createReducer } from '@reduxjs/toolkit';
import {FilmCard} from '../types/types';
import {ALL_GENRES} from '../const/const';
import {setFilms, setSelectedGenre} from './action';

type FilmReducerState = {
  films: FilmCard[];
  filteredFilms: FilmCard[];
  genres: string[];
  selectedGenre: string;
};


const initialState: FilmReducerState = {
  films: [],
  filteredFilms: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setFilms, (state, {payload}) => ({
    ...state,
    genres: [ALL_GENRES, ...new Set(payload.map(({genre}) => genre))],
    films: payload,
    filteredFilms:payload
  }
  ));
  builder.
    addCase(setSelectedGenre, (state, {payload}) => ({
      ...state,
      selectedGenre: payload,
      filteredFilms: payload === ALL_GENRES
        ? state.films
        : state.films.filter((film) => film.genre === payload)
    }
    ));
});

export default reducer;
