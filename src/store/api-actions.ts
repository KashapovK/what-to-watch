import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig } from '../types/state.ts';
import { Film, FilmCard, FilmReview } from '../types/types.ts';

export const loadFilms = createAsyncThunk<FilmCard[], undefined, AsyncActionConfig>(
  'films/loadFilms',
  async (_arg, {extra: api}) =>
    (await api.get<FilmCard[]>('/films')).data,
);

export const loadPromoFilm = createAsyncThunk<Film, undefined, AsyncActionConfig>(
  'films/loadPromoFilm',
  async (_arg, {extra: api}) =>
    (await api.get<Film>('/promo')).data,
);

export const loadFilmDetails = createAsyncThunk<Film, string, AsyncActionConfig>(
  'films/loadFilmDetails',
  async (id: string, {extra: api}) =>
    (await api.get<Film>(`/films/${id}`)).data,
);

export const loadSuggestions = createAsyncThunk<FilmCard[], string, AsyncActionConfig>(
  'films/loadSuggestions',
  async (id: string, {extra: api}) =>
    (await api.get<FilmCard[]>(`/films/${id}/similar`)).data,
);

export const loadReviews = createAsyncThunk<FilmReview[], string, AsyncActionConfig>(
  'reviews/loadReviews',
  async (filmId: string, {extra: api}) =>
    (await api.get<FilmReview[]>(`/comments/${filmId}`)).data,
);
