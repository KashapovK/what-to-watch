import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncActionConfig } from '../types/state.ts';
import { Film, FilmCard, UserCredentials, UserData } from '../types/types.ts';
import { dropToken, saveToken } from '../services/storage.ts';
import { FilmReview, ReviewValues } from '../types/review.ts';

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
  'review/loadReviews',
  async (filmId: string, {extra: api}) =>
    (await api.get<FilmReview[]>(`/comments/${filmId}`)).data,
);

export const verifyToken = createAsyncThunk<UserData, undefined, AsyncActionConfig>(
  'user/verifyToken',
  async (_arg, { extra: api }) => {
    try {
      return (await api.get<UserData>('/login')).data;
    } catch (e) {
      dropToken();
      throw e;
    }
  }
);

export const signIn = createAsyncThunk<UserData, UserCredentials, AsyncActionConfig>(
  'user/signIn',
  async ({ email, password }: UserCredentials, { extra: api }) => {
    const data = (await api.post<UserData>('/login', { email, password })).data;
    saveToken(data.token);
    return data;
  }
);

export const signOut = createAsyncThunk<void, undefined, AsyncActionConfig>(
  'user/signOut',
  async (_arg, { extra: api }) => {
    await api.delete('/logout');
    dropToken();
  }
);

export const loadFavoriteFilms = createAsyncThunk<FilmCard[], undefined, AsyncActionConfig>(
  'films/loadFavoriteFilms',
  async (_arg, { extra: api }) =>
    (await api.get<FilmCard[]>('/favorite')).data,
);

export const clearRequestCount = createAsyncThunk<void, undefined, AsyncActionConfig>(
  'app/clearRequestCount',
  () => undefined,
);

export const addReview = createAsyncThunk<void, ReviewValues & { filmId: string }, AsyncActionConfig>(
  'review/addReview',
  async ({ filmId, ...requestData }: ReviewValues & { filmId: string }, { extra: api }) =>
    await api.post(`/comments/${filmId}`, requestData)
);

export const setIsFavorite = createAsyncThunk<Film, { filmId: string; status: number }, AsyncActionConfig>(
  'films/setIsFavorite',
  async ({ filmId, status }: { filmId: string; status: number }, { extra: api }) =>
    (await api.post<Film>(`/favorite/${filmId}/${status}`)).data
);
