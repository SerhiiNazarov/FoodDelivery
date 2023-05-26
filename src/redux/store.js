import { configureStore } from '@reduxjs/toolkit';
import { dishesReducer } from './dishes/dishesSlice';
import { orderReducer } from './order/orderSlice';
import { formDataReducer } from './formData/formDataSlice';

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    order: orderReducer,
    formData: formDataReducer,
  },
});
