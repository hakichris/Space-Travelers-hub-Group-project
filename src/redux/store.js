import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missionsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
