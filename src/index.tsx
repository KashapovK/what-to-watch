import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app/app';
import WelcomeScreen from './pages/Main/welcome-screen';
import Card from './components/card/card';

const Setting = {
  FilmName: 'Grand Hotel',
  FilmGenre: 'Drama',
  FilmReleaseDate: 11,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      AppScreenProps={Setting.FilmName}
      AppScreenProps={Setting.FilmGenre}
      AppScreenProps={Setting.FilmReleaseDate}
    />
  </React.StrictMode>
);
