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

export const DishCounter = ({
  orders: { title, price, id, image },
  handlePriceChange,
}) => {
  const [priceValue, setPriceValue] = useState(Math.round(price));
  let priceObj = {};

  const dispatch = useDispatch();

  const changeInput = event => {
    const orderValue = event.currentTarget.value;
    const orderQuantity = Math.round(price) * orderValue;
    // orderValues[orderName] = orderValue;
    setPriceValue(orderQuantity);
    priceObj[title] = orderQuantity;
    handlePriceChange(priceObj);
    // dispatch(changeformData(orderValues));
  };

  return (
    <Container>
      <DishImage src={image} alt={title} />
      <ContentWrapper>
        <Btn
          type="button"
          onClick={() => {
            priceObj[title] = 0;
            handlePriceChange(priceObj);
            dispatch(deleteOrder(id));
          }}
        >
          <Icon size={25} />
        </Btn>
        <Text>{title}</Text>
        <Text>Price: {priceValue} </Text>
        <Input
          type="number"
          min="1"
          max="10"
          name={title}
          placeholder={0}
          onChange={changeInput}
        />
      </ContentWrapper>
    </Container>
  );
};
