import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

describe('Errorpage', () => {
  it('should exist', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );
    const errorMsg = screen.getByText('Error 404 Page Not found');
    expect(errorMsg).toBeInTheDocument();
  });

  it('should have a link to the home page', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );
    const homeLink = screen.getByText(/back home/i);
    expect(homeLink).toBeInTheDocument();
  });
});
