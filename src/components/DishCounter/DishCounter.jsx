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

export const DishCounter = ({
  orders: { title, price, id, image },
  handlePriceChange,
}) => {
  const [priceValue, setPriceValue] = useState(Math.round(price));

  const dispatch = useDispatch();

  const changeInput = event => {
    const orderValue = event.currentTarget.value;
    const orderQuantity = Math.round(price) * orderValue;
    setPriceValue(orderQuantity);
    handlePriceChange({ [title]: { orderQuantity, orderValue } });
  };

  return (
    <Container>
      <DishImage src={image} alt={title} />
      <ContentWrapper>
        <Btn
          type="button"
          onClick={() => {
            handlePriceChange({ [title]: { orderQuantity: 0, orderValue: 0 } });
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
