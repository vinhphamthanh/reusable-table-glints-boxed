import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
  totalPage: 1,
};

const tableSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action) {
      const { payload: { totalPage, data } } = action;
      state.loading = false;
      state.totalPage = totalPage;
      state.data = data;
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload
    }
  }
})

export const tableActions = tableSlice.actions;
export default tableSlice.reducer;
