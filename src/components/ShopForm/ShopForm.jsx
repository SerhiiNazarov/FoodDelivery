import React, { useState } from 'react';
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

import { DishList } from '../DishList/DishList';

export const ShopForm = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleSubmit = ({ name, phone, email, address }, { resetForm }) => {};

  const handlePriceChange = price => {
    setTotalPrice(price);
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
            <DishList handlePriceChange={handlePriceChange} />
          </DishContainer>
        </Container>

        <Button type="submit">Submit</Button>
        <Text>Total price: {totalPrice}</Text>
      </Formfield>
    </Formik>
  );
};
