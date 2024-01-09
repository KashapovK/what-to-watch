import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {Film, FilmCard} from '../types/types';
import {ALL_GENRES, EPortionSizes} from '../const/film';
import { loadFavoriteFilms, loadFilmDetails, loadFilms, loadPromoFilm, loadSuggestions, setIsFavorite, signOut } from './api-actions';
interface FilmSliceState {
  films: FilmCard[];
  filteredFilms: FilmCard[];
  genres: string[];
  selectedGenre: string;
  filmListSize: FilmCard[];
  filmListMaxLength: number;
  suggestions: FilmCard[];
  suggestion: FilmCard[];
  selectedFilm?: Film;
  favoriteFilms: FilmCard[];
}

export const initialState: FilmSliceState = {
  films: [],
  filteredFilms: [],
  genres: [ALL_GENRES],
  selectedGenre: ALL_GENRES,
  filmListSize: [],
  filmListMaxLength: EPortionSizes.FilmList,
  suggestions: [],
  suggestion: [],
  favoriteFilms: [],
};

function setSelectedFilm(state: FilmSliceState, action: PayloadAction<Film>) {
  state.selectedFilm = action.payload;
}

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
          selectedGenre: action.payload,
          filteredFilms,
          filmListSize: filteredFilms.slice(0, EPortionSizes.FilmList),
          filmListMaxLength: EPortionSizes.FilmList
        }
      );
    },
    showMoreFilms: (state) => {
      const newLength = state.filmListMaxLength + EPortionSizes.FilmList;

      return (
        {
          ...state,
          filmListMaxLength: newLength,
          filmListSize: state.filteredFilms.slice(0, newLength)
        }
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadFilms.fulfilled, (state, action: PayloadAction<FilmCard[]>) => (
      {
        ...state,
        selectedGenre: ALL_GENRES,
        filmListMaxLength: EPortionSizes.FilmList,
        genres: [ALL_GENRES, ...new Set(action.payload.map(({ genre }) => genre))].slice(0, EPortionSizes.Genres),
        films: action.payload,
        filteredFilms: action.payload,
        filmListPortion: action.payload.slice(0, EPortionSizes.FilmList),
      }
    ));
    builder.addCase(loadPromoFilm.fulfilled, setSelectedFilm);
    builder.addCase(loadFilmDetails.fulfilled, setSelectedFilm);
    builder.addCase(setIsFavorite.fulfilled, setSelectedFilm);
    builder.addCase(loadSuggestions.fulfilled, (state, action: PayloadAction<FilmCard[]>) => (
      {
        ...state,
        suggestions: action.payload,
        suggestionPortion: action.payload.slice(0, EPortionSizes.Suggestions),
      }
    ));
    builder.addCase(loadFavoriteFilms.fulfilled, (state, action: PayloadAction<FilmCard[]>) => (
      {
        ...state,
        favoriteFilms: action.payload,
      }
    ));
    builder.addCase(signOut.fulfilled, (state) => ({
      ...state,
      favoriteFilms: [],
      selectedFilm: state.selectedFilm ? { ...state.selectedFilm, isFavorite: false } : undefined,
    }));
  },
});

export const { setSelectedGenre, showMoreFilms } = filmSlice.actions;
export default filmSlice.reducer;
