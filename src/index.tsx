import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { mockDataFilms, mockDataPromo } from './mocks/films';
import mockDataReviews from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App filmCard={mockDataFilms} filmProps={mockDataPromo} reviews={mockDataReviews} />
    </Provider>
  </React.StrictMode>
);
