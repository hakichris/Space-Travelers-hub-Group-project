import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});

export default store;
