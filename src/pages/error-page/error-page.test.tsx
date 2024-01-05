import { render, screen } from '@testing-library/react';
import ErrorPage from './error-page.tsx';
import { withProviders } from '../../utils/mock-component.tsx';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import { clearRequestCount } from '../../store/api-actions.ts';
import { extractActionsTypes } from '../../utils/mock-reducer.ts';
import { AppRoute } from '../../const/const.ts';

describe('Component: SignInForm', () => {
  it('should render correctly and display redirect link', async () => {
    const {component, mockHistory, mockStore} = withProviders(<ErrorPage />);
    render(component);
    expect(screen.getByText(/ошибка 404\. страница не найдена/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {name: /вернуться на главную страницу/i}));
    expect(mockHistory.location.pathname).toBe(AppRoute.Main);
    const actions = extractActionsTypes(mockStore.getActions());
    expect(actions).toEqual([
      clearRequestCount.pending.type,
      clearRequestCount.fulfilled.type,
    ]);
  });
});
