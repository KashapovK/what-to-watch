import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withProviders } from '../../../utils/mock-component.tsx';
import { mockFilmDetails } from '../../../utils/mock-data.ts';
import { AppRoute } from '../../../const/const.ts';
import Breadcrumbs from './breadcrumbs.tsx';

describe('Component: Breadcrumbs', () => {
  const {id, name} = mockFilmDetails();

  it('should redirect to film details page on link click', async () => {
    const { component, mockHistory } = withProviders(
      <Breadcrumbs id={id} name={name} />
    );
    render(component);
    const link = screen.getByRole('link', { name });
    expect(link).toBeInTheDocument();
    await userEvent.click(link);
    expect(mockHistory.location.pathname).toBe(AppRoute.Film.replace(':id', id));
  });

  it('should redirect to add review-block page on link click', async () => {
    const { component, mockHistory } = withProviders(
      <Breadcrumbs id={id} name={name} />
    );
    render(component);
    const link = screen.getByRole('link', { name: /add review/i });
    expect(link).toBeInTheDocument();
    await userEvent.click(link);
    expect(mockHistory.location.pathname).toBe(AppRoute.AddReview.replace(':id', id));
  });
});
