import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import { AppRoute, AuthorizationStatus } from '../../const/const.ts';
import SignIn from './sign-in.tsx';

describe('Component: SignIn', () => {
  it('should render correctly', () => {
    const {component} = withProviders(<SignIn />);
    render(component);
    expect(screen.getByRole('heading', {name: /sign in/i})).toBeInTheDocument();
  });

  it('should redirect to the main page when user is unauthorized', () => {
    const {component, history} = withProviders(<SignIn />, {
      user: {
        authorizationStatus: AuthorizationStatus.Authorized
      }
    });
    render(component);
    expect(history.location.pathname).toBe(AppRoute.Main);
  });
});
