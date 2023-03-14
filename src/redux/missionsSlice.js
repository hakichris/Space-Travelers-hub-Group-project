import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';
export const getMissions = createAsyncThunk(
  'missions/getmissions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios(url);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (state, { payload }) => {
      const newMissions = payload.map(
        ({ mission_name, mission_id, description }) => ({
          mission_name,
          mission_id,
          description,
          reserved: false,
        })
      );
      return { ...state, missionList: newMissions };
    });
  },
});
export const { toggleMission } = mission.actions;
export default mission.reducer;
