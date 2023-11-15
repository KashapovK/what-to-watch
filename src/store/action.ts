import {createAction} from '@reduxjs/toolkit';
import { FilmCard } from '../types/types';

export const setFilms = createAction<FilmCard[]> ('setFilms');
export const setSelectedGenre = createAction<string>('setSelectedGenre');
