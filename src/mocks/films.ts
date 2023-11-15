import {v4 as uuidv4} from 'uuid';
import { Film, FilmCard } from '../types/types';

export const mockDataFilms: FilmCard [] = [
  {
    id: uuidv4(),
    name: 'Программирование',
    posterImage:'https://upload.wikimedia.org/wikipedia/commons/b/b7/Html-source-code.png'
  },
  {
    id: uuidv4(),
    name: 'Кодирование',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  },
  {
    id: uuidv4(),
    name: 'Написание кода',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  }
  ,
  {
    id: uuidv4(),
    name: 'Поездка в Мадрид',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  },
  {
    id: uuidv4(),
    name: 'Яблоневый сад',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  },
  {
    id: uuidv4(),
    name: 'Новый фильм',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  },
  {
    id: uuidv4(),
    name: 'Стакан',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  },
  {
    id: uuidv4(),
    name: 'Репа',
    posterImage:'https://pcvector.net/uploads/posts/2020-05/1588704045_matrix-screen-min.jpg'
  }
];

export const mockDataPromo: Film [] = [
  {
    id: uuidv4(),
    name: 'The Grand Budapest Hotel',
    genre: 'Drama',
    releaseDate: 2014,
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'],
    runTime: '1h 39m',
    video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    isFavourite: true,
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: 10,
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    scoresCount: 20,
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  },
  {
    id: uuidv4(),
    name: 'Hotel',
    genre: 'Drama, Comedy',
    releaseDate: 2012,
    director: 'Wes Anderson',
    starring: ['Bill Murray',
      'Edward Norton',
      'пупуп',
      'ууу'],
    runTime: '455m',
    video:'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    isFavourite: false,
    description: 'CHECK a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege. Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    rating: 3,
    backgroundImage: 'img/the-grand-budapest-hotel-poster.jpg',
    scoresCount: 2,
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  }
];
