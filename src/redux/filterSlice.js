import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
