import { render, screen } from '@testing-library/react';
import * as faker from 'faker';
import { withProviders } from '../../utils/mock-component.tsx';
import FilmControls from './film-controls.tsx';

describe('Component: FilmControls', () => {
  const mockFilmId = faker.datatype.uuid();

  it('should render correctly', () => {
    const { component } = withProviders(
      <FilmControls>
        <FilmControls.PlayLink id={mockFilmId} />
      </FilmControls>
    );
    render(component);
    expect(screen.getByRole('link', { name: /play/i })).toBeInTheDocument();
  });
});
