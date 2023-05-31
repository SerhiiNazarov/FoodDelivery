import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: { order: [] },
  reducers: {
    changeOrder(state, { payload }) {
      state.order = [...state.order, payload];
    },
    deleteOrder(state, { payload }) {
      state.order = state.order.filter(item => item.id !== payload);
    },
  },
});

export const { changeOrder, deleteOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
