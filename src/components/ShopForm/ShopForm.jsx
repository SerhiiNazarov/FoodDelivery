import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  Formfield,
  Input,
  Label,
  Button,
  Text,
  DishContainer,
  UserContainer,
} from './ShopForm.styled';
import { getOrderValue } from 'redux/order/orderSelectors.js';
// import { getformData } from 'redux/formData/formDataSelectors';
import { DishCounter } from '../DishCounter/DishCounter';

export const ShopForm = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalPriceObj, setTotalPriceObj] = useState({});

  useEffect(() => {
    const values = Object.values(totalPriceObj);

    const sum = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalPrice(sum);
  }, [totalPriceObj]);

  const orders = useSelector(getOrderValue);

  const handleSubmit = ({ name, phone, email, address }, { resetForm }) => {
    setTotalPriceObj({});
  };

  const handlePriceChange = price => {
    setTotalPriceObj(prevState => {
      return { ...prevState, ...price };
    });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        address: '',
      }}
      onSubmit={handleSubmit}
    >
      <Formfield autoComplete="off">
        <Container>
          <UserContainer>
            <Label>
              Name
              <Input type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: '#d95d5d' }}
              />
            </Label>
            <Label>
              Phone
              <Input type="tel" name="phone" />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: '#d95d5d' }}
              />
            </Label>
            <Label>
              Email
              <Input type="email" name="email" />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: '#d95d5d' }}
              />
            </Label>
            <Label>
              Address
              <Input type="text" name="address" />
              <ErrorMessage
                name="number"
                component="div"
                style={{ color: '#d95d5d' }}
              />
            </Label>
          </UserContainer>
          <DishContainer>
            {orders.length !== 0 ? (
              orders.map(order => (
                <DishCounter
                  key={order.id}
                  orders={order}
                  handlePriceChange={handlePriceChange}
                />
              ))
            ) : (
              <p>You have no orders</p>
            )}
          </DishContainer>
        </Container>

        <Button type="submit">Submit</Button>
        <Text>Total price: {totalPrice}</Text>
      </Formfield>
    </Formik>
  );
};
