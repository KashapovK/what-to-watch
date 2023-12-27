import { render, screen } from '@testing-library/react';
import * as faker from 'faker';
import { formatPlayerTime } from '../../../utils/format.ts';
import TimeControl from './time-control.tsx';

describe('Component: TimeControls', () => {
  const time = faker.time.recent();

  it('should render correctly', () => {
    render(<TimeControl time={time} duration={time}/>);
    expect(screen.getByText(formatPlayerTime(time))).toBeInTheDocument();
  });
});
