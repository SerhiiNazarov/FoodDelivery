import React, { useState } from 'react';
import {
  Container,
  Text,
  DishImage,
  Input,
  ContentWrapper,
  Btn,
  Icon,
} from './DishCounter.styled';

import { useDispatch } from 'react-redux';
// import { changeformData } from 'redux/formData/formDataSlice';
import { deleteOrder } from 'redux/order/orderSlice';

// const orderValues = {};

export const DishCounter = ({ orders, handlePriceChange }) => {
  const [priceValue, setPriceValue] = useState(Math.round(orders.price));
  let priceObj = {};

  const dispatch = useDispatch();

  const changeInput = event => {
    const orderValue = event.currentTarget.value;
    const orderQuantity = orders.price * orderValue;
    // orderValues[orderName] = orderValue;
    setPriceValue(orderQuantity);
    priceObj[orders.title] = orderQuantity;
    handlePriceChange(priceObj);
    // dispatch(changeformData(orderValues));
  };

  return (
    <Container>
      <DishImage src={orders.image} alt={orders.title} />
      <ContentWrapper>
        <Btn
          type="button"
          onClick={() => {
            priceObj[orders.title] = 0;
            handlePriceChange(priceObj);
            dispatch(deleteOrder(orders.id));
          }}
        >
          <Icon size={25} />
        </Btn>
        <Text>{orders.title}</Text>
        <Text>Price: {priceValue} </Text>
        <Input
          type="number"
          min="1"
          max="10"
          name={orders.title}
          placeholder={0}
          onChange={changeInput}
        />
      </ContentWrapper>
    </Container>
  );
};
