import { configureStore } from '@reduxjs/toolkit';
import { dishesReducer } from './dishes/dishesSlice';
import { orderReducer } from './order/orderSlice';

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    order: orderReducer,
  },
});
