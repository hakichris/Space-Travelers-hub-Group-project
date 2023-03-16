import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbat', () => {
  it('should should have missions link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const missionsLink = screen.getByText(/Missions/i);
    expect(missionsLink).toBeInTheDocument();
  });
  it('should should have rockets link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const rocketLink = screen.getByText('Rockets');
    expect(rocketLink).toBeInTheDocument();
  });
  it('should should have profile link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const profileLink = screen.getByText(/My Profile/i);
    expect(profileLink).toBeInTheDocument();
  });
});
