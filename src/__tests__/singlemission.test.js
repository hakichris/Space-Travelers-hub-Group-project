import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SingleMission from '../components/SingleMission';

import missionsReducer from '../redux/missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

describe('SingleMission', () => {
  test('renders mission details and join/leave button', () => {
    const mission = {
      mission_id: '123',
      mission_name: 'Test Mission',
      description: 'This is a test mission',
      reserved: false,
    };
    render(
      <Provider store={store}>
        <SingleMission
          mission_id={mission.mission_id}
          description={mission.description}
          reserved={mission.reserved}
          mission_name={mission.mission_name}
        />
      </Provider>,
    );

    expect(screen.getByText(mission.mission_name)).toBeInTheDocument();
    expect(screen.getByText(mission.description)).toBeInTheDocument();
    expect(screen.getByText(/not a member/i)).toBeInTheDocument();
  });
});
