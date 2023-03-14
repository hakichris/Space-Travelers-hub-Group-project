import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionList: [],
};

const mission = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    toggleMission: (state, { payload }) => {
      payload.toString();
    },
  },
});
export const { toggleMission } = mission.actions;
export default mission.reducer;
