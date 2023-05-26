import React from 'react';
import {
  Container,
  Text,
  DishImage,
  Input,
  ContentWrapper,
} from './DishCounter.styled';

const orderValues = {};

export const DishCounter = ({ orders: { image, title, price } }) => {
  const changeInput = event => {
    const orderName = event.currentTarget.name;
    const orderValue = event.currentTarget.value;
    orderValues[orderName] = orderValue;
  };

  return (
    <Container>
      <DishImage src={image} alt={title} />
      <ContentWrapper>
        <Text>{title}</Text>
        <Text>Price: {price} </Text>
        <Input type="number" name={title} onChange={changeInput} />
      </ContentWrapper>
    </Container>
  );
};
