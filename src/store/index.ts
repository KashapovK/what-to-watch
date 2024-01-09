import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
import { initAPI } from '../services/api';

export const api = initAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
