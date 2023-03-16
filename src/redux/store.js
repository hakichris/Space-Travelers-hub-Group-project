import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';
import rocketReducer from './rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rocket: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
