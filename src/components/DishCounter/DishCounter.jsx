import React, { useState } from 'react';
import {
  Container,
  Text,
  DishImage,
  Input,
  ContentWrapper,
} from './DishCounter.styled';

const orderValues = {};
const totalPriceObj = {};

const changePriceValue = handlePriceChange => {
  const values = Object.values(totalPriceObj);
  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  handlePriceChange(sum);
};

export const DishCounter = ({
  orders: { image, title, price },
  handlePriceChange,
}) => {
  const [priceValue, setPriceValue] = useState(Math.round(price));

  const changeInput = event => {
    const orderName = event.currentTarget.name;
    const orderValue = event.currentTarget.value;
    const orderQuantity = price * orderValue;
    orderValues[orderName] = orderValue;
    totalPriceObj[orderName] = orderQuantity;
    setPriceValue(orderQuantity);
    changePriceValue(handlePriceChange);
  };

  return (
    <Container>
      <DishImage src={image} alt={title} />
      <ContentWrapper>
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
