import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-component.tsx';
import RequestSuspense from './request-suspense.tsx';

describe('Component: RequestSuspense', () => {
  it('should render children when no request is pending', () => {
    const { component } = withProviders(
      <RequestSuspense>
        <span>Example Child</span>
      </RequestSuspense>
    );
    render(component);
    expect(screen.getByText(/example child/i)).toBeInTheDocument();
  });

  it('should render spinner when any request is pending', () => {
    const mockedRequestCount = 1;

    const { component } = withProviders(
      <RequestSuspense>
        <span>Example Child</span>
      </RequestSuspense>,
      {
        app: {
          pendingRequestsCount: mockedRequestCount
        }
      }
    );
    render(component);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.queryByText(/example child/i)).not.toBeInTheDocument();
  });
});
