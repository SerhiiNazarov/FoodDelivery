import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: ' formData',
  initialState: { formData: [] },
  reducers: {
    changeformData(state, { payload }) {
      state.formData = [...state.formData, payload];
    },
  },
});

export const { changeformData } = formDataSlice.actions;
export const formDataReducer = formDataSlice.reducer;
