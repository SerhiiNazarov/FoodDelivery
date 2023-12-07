import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDish, deleteDish } from 'redux/order/orderSlice';
import { CardWrapper, CardBtn, CardImage, CardText } from './MenuCard.styled';

import { getOrderValue } from 'redux/order/orderSelectors';

export const MenuCard = ({ dish }) => {
  const [toggleOrder, setToggleOrder] = useState(false);

  const dispatch = useDispatch();
  // const orders = useSelector(getOrderValue);

  // const defaultValue = () => {};

  const changeOrderList = () => {
    if (!toggleOrder) {
      dispatch(addDish(dish));
    } else {
      dispatch(deleteDish(dish.id));
    }

    setToggleOrder(!toggleOrder);
  };
  return (
    <CardWrapper>
      <CardImage src={dish.image} alt={dish.title} />
      <CardText>{dish.title}</CardText>
      <CardText>{dish.price}</CardText>
      <CardBtn type="button" onClick={changeOrderList} theme={toggleOrder}>
        {toggleOrder ? 'Delete' : 'Add to order'}
      </CardBtn>
    </CardWrapper>
  );
};
