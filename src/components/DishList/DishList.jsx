import React from 'react';
import { useSelector } from 'react-redux';
import { List } from './DishList.styled.js';
import { DishCounter } from '../DishCounter/DishCounter.jsx';
import { getOrderValue } from 'redux/order/orderSelectors.js';

export const DishList = () => {
  const orders = useSelector(getOrderValue);

  return (
    <List>
      {orders &&
        orders.map((order, index) => (
          <DishCounter key={index} orders={order} />
        ))}
    </List>
  );
};
