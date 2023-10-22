import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {v4 as uuidv4} from 'uuid';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mockData = {
  id: uuidv4(),
  FilmName: 'Grand Hotel',
  FilmGenre: 'Drama',
  FilmReleaseDate: 2014,
};

root.render(
  <React.StrictMode>
    <App
      filmName={mockData.FilmName}
      {...mockData}
    />
  </React.StrictMode>
);
