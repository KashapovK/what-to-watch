import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withProviders } from '../../utils/mock-component.tsx';
import { mockFilmDetails } from '../../utils/mock-data.ts';
import Card from './card.tsx';

describe('Component: FilmCard', () => {
  const mockFilmData = mockFilmDetails();

  it('should display video on hover and image by default', async () => {
    const { component } = withProviders(<Card {...mockFilmData} />);
    render(component);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
    await userEvent.hover(article);
    expect(await screen.findByTestId('video-player')).toBeInTheDocument();
    await userEvent.unhover(article);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
