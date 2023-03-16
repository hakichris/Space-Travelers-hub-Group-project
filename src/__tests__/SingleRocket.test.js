import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Rocket from '../components/SingleRocket';

import rocketReducer from '../redux/rocketsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

describe('SingleMission', () => {
  test('renders mission details and join/leave button', () => {
    const rocket = {
      id: '123',
      rocketName: 'Test Mission',
      description: 'This is a test mission',
      Image: 'Chris',
      reserved: false,
    };
    render(
      <Provider store={store}>
        <Rocket
          id={rocket.id}
          description={rocket.description}
          reserved={rocket.reserved}
          Image={rocket.Image}
          rocketName={rocket.rocketName}
        />
      </Provider>,
    );

    expect(screen.getByText(rocket.rocketName)).toBeInTheDocument();
    expect(screen.getByText(rocket.description)).toBeInTheDocument();
  });
});
