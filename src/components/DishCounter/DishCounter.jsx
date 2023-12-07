import React, { useState, useEffect } from 'react';
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

import { deleteDish } from 'redux/order/orderSlice';

export const DishCounter = ({
  orders: { title, price, id, image },
  handlePriceChange,
}) => {
  const [priceValue, setPriceValue] = useState(Math.round(price));
  const [inputValue, setInputValue] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    handlePriceChange({
      [title]: { orderQuantity: Math.round(price), orderValue: 1 },
    });
  }, []);

  const changeInput = event => {
    const orderValue = event.currentTarget.value;
    const orderQuantity = Math.round(price) * orderValue;
    setInputValue(orderValue);
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
            dispatch(deleteDish(id));
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
          value={inputValue}
          onChange={changeInput}
        />
      </ContentWrapper>
    </Container>
  );
};
