import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataChecked: {},
};

const jsonSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {
    checkDataStart() {},
    checkDataDone(state, action) {
      if (Object.keys(action.payload).length === 0) {
        state.dataChecked = [];
      } else {
        state.dataChecked = { ...state.dataChecked, ...action.payload };
      }
    },
  },
});

export const jsonActions = jsonSlice.actions;
export default jsonSlice.reducer;
