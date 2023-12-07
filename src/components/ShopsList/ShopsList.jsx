import React, { useState, useEffect } from 'react';

import {
  Container,
  Text,
  BtnWrapper,
  Btn,
  CardList,
  BtnOrder,
  CardWrapper,
  Link,
} from './ShopsList.styled';
import { MenuCard } from 'components/MenuCard/MenuCard';
import { BackBtn } from 'components/BackBtn';

import { useDispatch, useSelector } from 'react-redux';
import { dishesSelectors, dishesOperations } from 'redux/dishes';

import { shopsList } from 'utils/shopsList';
import { getOrderValue } from 'redux/order/orderSelectors';
import { deleteAllOrder } from 'redux/order/orderSlice';

export const ShopsList = () => {
  const [selectRestaurant, setSelectRestaurant] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const dishes = useSelector(dishesSelectors.selectDishes);
  const orders = useSelector(getOrderValue);
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
      btnBackground: id === Number(activeButton) ? '#a31212' : '#F5ECEC',
    };
  };

  const onBackBtnClick = () => {
    setSelectRestaurant('');
    dispatch(deleteAllOrder());
  };

  return (
    <>
      {selectRestaurant && (
        <>
          <BackBtn link="/" onClick={onBackBtnClick} />
          <Text>{selectRestaurant}</Text>
        </>
      )}
      <Container>
        {!selectRestaurant && (
          <>
            <Text>Restaurants:</Text>
            <BtnWrapper>
              {shopsList &&
                shopsList.map(shop => (
                  <Btn
                    key={shop.id}
                    type="button"
                    id={shop.id}
                    name={shop.name}
                    onClick={onSelect}
                    theme={isActive(shop.id)}
                  >
                    {shop.name}
                  </Btn>
                ))}
            </BtnWrapper>
          </>
        )}

        {selectRestaurant && (
          <CardWrapper>
            <CardList>
              {dishes && selectRestaurant !== '' ? (
                dishes.map(dish => <MenuCard key={dish.id} dish={dish} />)
              ) : (
                <p>Please select a restaurant</p>
              )}
            </CardList>

            {orders.length !== 0 && (
              <Link to="/shopingCard">
                <BtnOrder>To Order</BtnOrder>
              </Link>
            )}
          </CardWrapper>
        )}
      </Container>
    </>
  );
};
