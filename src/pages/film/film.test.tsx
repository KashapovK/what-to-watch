import { render, screen, waitFor } from '@testing-library/react';
import { expect } from 'vitest';
import { mockFilmArray, mockReviewArray, mockUserDetails } from '../../utils/mock-data.ts';
import { withProviders } from '../../utils/mock-component.tsx';
import { extractActionsTypes } from '../../utils/mock-reducer.ts';
import { loadFavoriteFilms, loadFilmDetails, loadReviews, loadSuggestions} from '../../store/api-actions.ts';
import { StatusCodes } from 'http-status-codes';
import Film from './film.tsx';
import { AuthorizationStatus } from '../../const/const.ts';

describe('Component: Film', () => {
  const mockFilteredFilms = mockFilmArray();
  const mockReviews = mockReviewArray();
  const mockUserData = mockUserDetails();

  it('should render correctly and load data', async () => {
    const { component, mockStore, mockAxiosAdapter } = withProviders(<Film />, {
      user: {
        ...mockUserData,
        authorizationStatus: AuthorizationStatus.Authorized,
      },
      film: {
        suggestion: mockFilteredFilms.slice(1),
        selectedFilm: mockFilteredFilms[0],
        favoriteFilms: mockFilteredFilms,
      },
      review: {
        reviews: mockReviews,
      }
    });
    mockAxiosAdapter.onGet(/\/favorite/).reply(StatusCodes.OK, mockFilteredFilms);
    mockAxiosAdapter.onGet(/\/comments/).reply(StatusCodes.OK, mockReviews);
    mockAxiosAdapter.onGet(/\/films/).reply(StatusCodes.OK);
    render(component);
    expect(screen.getByAltText(mockFilteredFilms[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockFilteredFilms[0].name)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    await waitFor(() => expect(extractActionsTypes(mockStore.getActions())).toEqual([
      loadReviews.pending.type,
      loadReviews.fulfilled.type,
      loadSuggestions.pending.type,
      loadSuggestions.fulfilled.type,
      loadFilmDetails.pending.type,
      loadFilmDetails.fulfilled.type,
      loadFavoriteFilms.pending.type,
      loadFavoriteFilms.fulfilled.type,
    ]));
  });
});
