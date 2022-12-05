import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  searchData: [],
  loading: false,
  error: null,
  totalPage: 1,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.isSearching = false;
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
    },
    searchDataStart(state) {
      state.loading = true;
    },
    searchDataSuccess(state, action) {
      state.loading = false;
      state.searchData = action.payload;
      state.isSearching = true;
    },
    searchClearStart(state) {
      state.loading = true;
    },
    searchClearSuccess(state) {
      state.loading = false;
      state.searchData = [];
      state.isSearching = false;
    }
  }
})

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
