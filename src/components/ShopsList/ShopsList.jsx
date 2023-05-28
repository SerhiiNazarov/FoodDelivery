import React, { useState, useEffect } from 'react';

import {
  Container,
  Text,
  BtnWrapper,
  Btn,
  CardWrapepr,
} from './ShopsList.styled';
import { MenuCard } from 'components/MenuCard/MenuCard';

import { useDispatch, useSelector } from 'react-redux';
import { dishesSelectors, dishesOperations } from 'redux/dishes';

export const ShopsList = () => {
  const [shopName, setShopName] = useState('');

  const dishes = useSelector(dishesSelectors.selectDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dishesOperations.fetchDishes());
  }, [shopName, dispatch]);

  const changeShop = e => {
    const shop = e.currentTarget.name;
    setShopName(shop);
    const elements = document.getElementsByTagName('button');
    // const firstElement = elements[0];
    console.log(elements);
    // e.currentTarget.style.backgroundColor = 'red';
  };

  return (
    <>
      <Text>{shopName}</Text>
      <Container>
        <BtnWrapper>
          <Text>Shops:</Text>
          <Btn type="button" name="McDonald`s" onClick={changeShop}>
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
          {dishes && shopName !== '' ? (
            dishes.map(dish => <MenuCard key={dish.id} dishes={dish} />)
          ) : (
            <p>Please select a restaurant</p>
          )}
        </CardWrapepr>
      </Container>
    </>
  );
};
