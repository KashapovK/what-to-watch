import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {Film, FilmCard} from '../types/types';
import {ALL_GENRES, FILM_LIST_SIZE, SUGGESTION_SIZE} from '../const/film';
import { loadFilmDetails, loadFilms, loadPromoFilm, loadSuggestions } from './api-actions';


type FilmSliceState = {
  films: FilmCard[];
  filteredFilms: FilmCard[];
  genres: string[];
  selectedGenre: string;
  filmListSize: FilmCard[];
  filmListMaxLength: number;
  suggestions: FilmCard[];
  suggestion: FilmCard[];
  promoFilm?: Film;
  selectedFilm?: Film;
};


const initialState: FilmSliceState = {
  films: [],
  filteredFilms: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES,
  filmListSize: [],
  filmListMaxLength: FILM_LIST_SIZE,
  suggestions: [],
  suggestion: [],
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      const filteredFilms =
      action.payload === ALL_GENRES
        ? state.films
        : state.films.filter((film) => film.genre === action.payload);
      return (
        {
          ...state,
          SelectedGenre: action.payload,
          filteredFilms,
          filmListSize: filteredFilms.slice(0, FILM_LIST_SIZE),
          filmListMaxLength: FILM_LIST_SIZE
        }
      );
    },
    showMoreFilms: (state) => {
      const length = state.filmListMaxLength + FILM_LIST_SIZE;

      return (
        {
          ...state,
          filmListMaxLength: length,
          filmListSize: state.filteredFilms.slice(0, length)
        }
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadFilms.fulfilled, (state, action: PayloadAction<FilmCard[]>) => (
      {
        ...state,
        selectedGenre: ALL_GENRES,
        filmListLength: FILM_LIST_SIZE,
        genres: [ALL_GENRES, ...new Set(action.payload.map(({ genre }) => genre))],
        films: action.payload,
        filteredFilms: action.payload,
        filmListPortion: action.payload.slice(0, FILM_LIST_SIZE),
      }
    ));
    builder.addCase(loadPromoFilm.fulfilled, (state, action: PayloadAction<Film>) => (
      {
        ...state,
        promoFilm: action.payload,
      }
    ));
    builder.addCase(loadFilmDetails.fulfilled, (state, action: PayloadAction<Film>) => (
      {
        ...state,
        selectedFilm: action.payload,
      }
    ));
    builder.addCase(loadSuggestions.fulfilled, (state, action: PayloadAction<FilmCard[]>) => (
      {
        ...state,
        suggestions: action.payload,
        suggestionPortion: action.payload.slice(0, SUGGESTION_SIZE),
      }
    ));
  },
});


export const { setSelectedGenre, showMoreFilms } = filmSlice.actions;
export default filmSlice.reducer;
