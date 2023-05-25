import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: { order: [] },
  reducers: {
    changeOrder(state, { payload }) {
      state.order = [...state.order, payload];
    },
  },
});

export const { changeOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
