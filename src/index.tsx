import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import WelcomeScreen from './pages/Main/welcome-screen';
import Card from './components/card/card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const mockData = {
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
