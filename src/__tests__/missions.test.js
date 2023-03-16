import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Missions from '../pages/Missions';
import missionsReducer from '../redux/missionsSlice';

const preloadedState = {
  missions: {
    missionList: [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Mission 1 description',
        reserved: false,
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Mission 2 description',
        reserved: true,
      },
    ],
  },
};

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
  preloadedState,
});

describe('Missions component', () => {
  it('renders missions correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();
  });
});
