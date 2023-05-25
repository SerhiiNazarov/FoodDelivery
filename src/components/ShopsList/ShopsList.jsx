import React, { useEffect, useState } from 'react';

import {
  Container,
  Text,
  BtnWrapper,
  Btn,
  CardWrapepr,
} from './ShopsList.styled';
import { MenuCard } from 'components/MenuCard/MenuCard';
// import shopsData from '../../services/shopsData';

import { useDispatch, useSelector } from 'react-redux';
import { dishesSelectors, dishesOperations } from 'redux/dishes';

export const ShopsList = () => {
  const dishes = useSelector(dishesSelectors.selectDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dishesOperations.fetchDishes());
  }, [dispatch]);

  const changeShop = e => {
    const element = e.currentTarget;
  };

  return (
    <Container>
      <BtnWrapper>
        <Text>Shops:</Text>
        <Btn type="button" name="McDonalds" onClick={changeShop}>
          McDonald's
        </Btn>
        <Btn type="button" name="KFS" onClick={changeShop}>
          KFS
        </Btn>
        <Btn type="button" name="Domino's Pizza" onClick={changeShop}>
          Domino's Pizza
        </Btn>
        <Btn type="button" name=" Burger King" onClick={changeShop}>
          Burger King
        </Btn>
        <Btn type="button" name="Lviv Croissants" onClick={changeShop}>
          Lviv Croissants
        </Btn>
      </BtnWrapper>
      <CardWrapepr>
        {dishes && dishes.map(dish => <MenuCard key={dish.id} dishes={dish} />)}
      </CardWrapepr>
    </Container>
  );
};
