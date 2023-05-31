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
  const [activeButton, setActiveButton] = useState(null);

  const dishes = useSelector(dishesSelectors.selectDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dishesOperations.fetchDishes());
  }, [shopName, dispatch]);

  const changeShop = event => {
    setShopName(event.currentTarget.name);
    setActiveButton(event.currentTarget.id);
  };

  const isActive = id => {
    return {
      btnColor: id === Number(activeButton) ? 'white' : 'inherit',
      btnBackground: id === Number(activeButton) ? 'orangered' : 'inherit',
    };
  };

  return (
    <>
      <Text>{shopName}</Text>
      <Container>
        <BtnWrapper>
          <Text>Shops:</Text>
          <Btn
            type="button"
            id={1}
            name="McDonald`s"
            onClick={changeShop}
            theme={isActive(1)}
          >
            McDonald's
          </Btn>
          <Btn
            type="button"
            id={2}
            name="KFS"
            onClick={changeShop}
            theme={isActive(2)}
          >
            KFS
          </Btn>
          <Btn
            type="button"
            id={3}
            name="Domino's Pizza"
            onClick={changeShop}
            theme={isActive(3)}
          >
            Domino's Pizza
          </Btn>
          <Btn
            type="button"
            id={4}
            name="Burger King"
            onClick={changeShop}
            theme={isActive(4)}
          >
            Burger King
          </Btn>
          <Btn
            type="button"
            id={5}
            name="Lviv Croissants"
            onClick={changeShop}
            theme={isActive(5)}
          >
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
