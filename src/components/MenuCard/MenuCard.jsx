import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDish, deleteDish } from 'redux/order/orderSlice';
import { CardWrapper, CardBtn, CardImage, CardText } from './MenuCard.styled';

export const MenuCard = ({ dish }) => {
  const [toggleOrder, setToggleOrder] = useState(false);
  const dispatch = useDispatch();

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
      <CardBtn type="button" onClick={changeOrderList} onActive={toggleOrder}>
        {toggleOrder ? 'Delete' : 'Add to order'}
      </CardBtn>
    </CardWrapper>
  );
};
