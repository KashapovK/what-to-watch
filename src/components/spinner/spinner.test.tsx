import { render, screen } from '@testing-library/react';
import { mockPlayerDetails } from '../../utils/mock-data.ts';
import VideoPlayer from '../video-player/index.tsx';

describe('Component: VideoPlayer', () => {
  const mockedPlayerData = mockPlayerDetails();

  it('should render correctly', () => {
    render(<VideoPlayer {...mockedPlayerData} />);
    expect(screen.getByTestId('video-player')).toBeInTheDocument();
  });
});
