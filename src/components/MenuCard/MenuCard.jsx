import React from 'react';
import { useDispatch } from 'react-redux';
import { changeOrder } from 'redux/order/orderSlice';
import { CardWrapper, CardBtn, CardImage, CardText } from './MenuCard.styled';

export const MenuCard = ({ dishes }) => {
  const dispatch = useDispatch();

  const changeOrderList = e => {
    e.currentTarget.style.borderColor = 'tomato';
    dispatch(changeOrder(dishes));
  };
  return (
    <CardWrapper>
      <CardImage src={dishes.image} alt={dishes.title} />
      <CardText>{dishes.title}</CardText>
      <CardText>{dishes.price}</CardText>
      <CardBtn type="button" onClick={changeOrderList}>
        Add to order
      </CardBtn>
    </CardWrapper>
  );
};
