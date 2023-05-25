import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes } from './dishesOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  extraReducers: {
    [fetchDishes.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    },
    [fetchDishes.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [fetchDishes.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
  },
});

export const dishesReducer = dishesSlice.reducer;
