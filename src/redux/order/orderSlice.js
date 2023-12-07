import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: { order: [] },
  reducers: {
    addDish(state, { payload }) {
      state.order = [...state.order, payload];
    },
    deleteDish(state, { payload }) {
      state.order = state.order.filter(item => item.id !== payload);
    },
    deleteAllOrder(state) {
      state.order = [];
    },
  },
});

export const { addDish, deleteDish, deleteAllOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
