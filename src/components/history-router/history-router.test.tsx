import { act, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { AppRoute } from '../../const/const.ts';
import HistoryRouter from './history-router.tsx';

describe('Component: HistoryRouter', () => {
  it('should render correctly', () => {
    const memoryHistory = createMemoryHistory();
    render(<HistoryRouter history={memoryHistory}/>);
    act(() => {
      memoryHistory.push(AppRoute.SignIn);
    });
    expect(memoryHistory.location.pathname).toBe(AppRoute.SignIn);
  });
});
