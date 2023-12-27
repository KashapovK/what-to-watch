import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import { mockFilmArray } from '../../utils/mock-data.ts';
import { expect } from 'vitest';
import MovieList from './movie-list.tsx';

describe('Component: FilmList', () => {
  const mockFilms = mockFilmArray();

  it('should display video on hover and image by default', () => {
    const { component } = withProviders(<MovieList prop={mockFilms} />);
    render(component);
    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(mockFilms.length);
  });
});
