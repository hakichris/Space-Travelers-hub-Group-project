import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Rockets from '../pages/Rockets';
import RocketReducer from '../redux/rocketsSlice';

const preloadedState = {
  rocket: {
    rocket: [
      {
        id: 1,
        rocketName: 'rocket 1',
        description: 'rocket 1 description',
        Image: 'chris',
        reserved: false,
      },
      {
        id: 2,
        rocketName: 'rocket 2',
        description: 'rocket 2 description',
        Image: 'chris',
        reserved: true,
      },
    ],
  },
};

const store = configureStore({
  reducer: {
    rocket: RocketReducer,
  },
  preloadedState,
});

describe('Rocket component', () => {
  it('renders rocket correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    expect(getByText('rocket 1 description')).toBeInTheDocument();
    expect(getByText('rocket 2 description')).toBeInTheDocument();
  });
});
