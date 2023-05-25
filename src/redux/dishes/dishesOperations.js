import { createAsyncThunk } from '@reduxjs/toolkit';
import { shopsData } from 'services/shopsData';

export const fetchDishes = createAsyncThunk(
  'dishes/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const dishes = await shopsData();
      return dishes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
