import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  misssions: [],
};

const mission = createSlice({
  name: 'mission',
  initialState,
});

export default mission.reducer;
