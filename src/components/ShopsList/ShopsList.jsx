import React, { useState, useEffect } from 'react';

import {
  Container,
  Text,
  BtnWrapper,
  Btn,
  CardWrapepr,
} from './ShopsList.styled';
import { MenuCard } from 'components/MenuCard/MenuCard';
import { BackBtn } from 'components/BackBtn';

import { useDispatch, useSelector } from 'react-redux';
import { dishesSelectors, dishesOperations } from 'redux/dishes';

export const ShopsList = () => {
  const [selectRestaurant, setSelectRestaurant] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const dishes = useSelector(dishesSelectors.selectDishes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dishesOperations.fetchDishes());
  }, [selectRestaurant, dispatch]);

  const onSelect = event => {
    setSelectRestaurant(event.currentTarget.name);
    setActiveButton(event.currentTarget.id);
  };

  const isActive = id => {
    return {
      btnColor: id === Number(activeButton) ? 'white' : 'inherit',
      btnBackground: id === Number(activeButton) ? 'orangered' : '#F5ECEC',
    };
  };

  return (
    <>
      {selectRestaurant && (
        <>
          <BackBtn link="/" />
          <Text>{selectRestaurant}</Text>
        </>
      )}
      <Container>
        {!selectRestaurant && (
          <>
            <Text>Restaurants:</Text>
            <BtnWrapper>
              <Btn
                type="button"
                id={1}
                name="McDonald`s"
                onClick={onSelect}
                theme={isActive(1)}
              >
                McDonald's
              </Btn>
              <Btn
                type="button"
                id={2}
                name="KFS"
                onClick={onSelect}
                theme={isActive(2)}
              >
                KFS
              </Btn>
              <Btn
                type="button"
                id={3}
                name="Domino's Pizza"
                onClick={onSelect}
                theme={isActive(3)}
              >
                Domino's Pizza
              </Btn>
              <Btn
                type="button"
                id={4}
                name="Burger King"
                onClick={onSelect}
                theme={isActive(4)}
              >
                Burger King
              </Btn>
              <Btn
                type="button"
                id={5}
                name="Lviv Croissants"
                onClick={onSelect}
                theme={isActive(5)}
              >
                Lviv Croissants
              </Btn>
            </BtnWrapper>
          </>
        )}

        {selectRestaurant && (
          <CardWrapepr>
            {dishes && selectRestaurant !== '' ? (
              dishes.map(dish => <MenuCard key={dish.id} dish={dish} />)
            ) : (
              <p>Please select a restaurant</p>
            )}
          </CardWrapepr>
        )}
      </Container>
    </>
  );
};
