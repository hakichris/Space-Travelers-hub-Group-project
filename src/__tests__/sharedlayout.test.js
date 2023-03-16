import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import SharedLayout from '../pages/SharedLayout';

describe('shared Layout', () => {
  it('should houl have misions link', () => {
    render(
      <MemoryRouter>
        <SharedLayout />
      </MemoryRouter>,
    );
    const missionLink = screen.getByText('Missions');
    expect(missionLink).toBeInTheDocument();
  });
});
