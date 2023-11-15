import { FilmCard } from '../types/types';
import {v4 as uuidv4} from 'uuid';

export const mockDataGenres: FilmCard [] = [
  {
    id: uuidv4(),
    name: 'All genres',
    genre:'all-genres'
  },
  {
    id: uuidv4(),
    name: 'Comidies',
    genre:'comedy'
  },
  {
    id: uuidv4(),
    name: 'Crime',
    genre:'crime'
  }
  ,
  {
    id: uuidv4(),
    name: 'Documentary',
    genre:'documentary'
  },
  {
    id: uuidv4(),
    name: 'Dramas',
    genre:'drama'
  },
  {
    id: uuidv4(),
    name: 'Horror',
    genre:'horror'
  },
  {
    id: uuidv4(),
    name: 'Kids & Family',
    genre:'Kids & Family'
  },
  {
    id: uuidv4(),
    name: 'Romance',
    genre:'romance'
  }
];
