import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import { expect } from 'vitest';
import PrivateRoute from './private-route.tsx';
import { AppRoute, AuthorizationStatus } from '../../const/const.ts';

describe('Component: PrivateRoute', () => {
  it('should render children when the user is authorized', () => {
    const { component } = withProviders(
      <PrivateRoute>
        <span>Example Child</span>
      </PrivateRoute>,
      {
        user: {
          authorizationStatus: AuthorizationStatus.Authorized,
        }
      }
    );
    render(component);
    expect(screen.getByText(/example child/i)).toBeInTheDocument();
  });

  it('should redirect to sign in page when the user is unauthorized', () => {
    const { component, history } = withProviders(
      <PrivateRoute>
        <span>Example Child</span>
      </PrivateRoute>,
      {
        user: {
          authorizationStatus: AuthorizationStatus.Unauthorized,
        }
      }
    );
    render(component);
    expect(history.location.pathname).toBe(AppRoute.SignIn);
    expect(screen.queryByText(/example child/i)).not.toBeInTheDocument();
  });
});
