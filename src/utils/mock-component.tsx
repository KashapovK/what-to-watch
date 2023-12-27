import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { State } from '../types/state';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { Provider } from 'react-redux';
import { DeepPartial, ThunkDispatch } from '@reduxjs/toolkit';
import { ReactElement } from 'react';
import { BrowserHistory, createMemoryHistory } from 'history';
import {initialState as filmSliceState} from '../store/film.ts';
import {initialState as reviewsSliceState} from '../store/review.ts';
import {initialState as appSliceState} from '../store/app.ts';
import {initialState as userSliceState} from '../store/user.ts';
import { createAPI } from '../services/api.ts';
import HistoryRouter from '../components/history-router/history-router.tsx';

type ComponentWithMockStore = {
  component: ReactElement;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
  history: BrowserHistory;
}

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export function withProviders(
  component: ReactElement,
  initialState: DeepPartial<State> = {},
): ComponentWithMockStore {
  const memoryHistory = createMemoryHistory();

  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator({
    film: filmSliceState,
    review: reviewsSliceState,
    user: userSliceState,
    app: appSliceState,
    ...initialState
  });

  return ({
    component: (
      <Provider store={mockStore}>
        <HistoryRouter history={memoryHistory}>
          {component}
        </HistoryRouter>
      </Provider>
    ),
    mockStore,
    mockAxiosAdapter,
    history: memoryHistory,
  });
}
