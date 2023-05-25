import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useSelector } from 'react-redux';
import {
  Container,
  Formfield,
  Input,
  Label,
  Button,
  DishContainer,
  UserContainer,
} from './ShopForm.styled';
import { getOrderValue } from 'redux/order/orderSelectors.js';

import { DishList } from '../DishList/DishList';

export const ShopForm = () => {
  const orders = useSelector(getOrderValue);

  const handleSubmit = (
    { name, phone, email, address, dish = 1 },
    { resetForm }
  ) => {
    // resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        address: '',
        dishes: orders,
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
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
              <DishList values={values} />
            </DishContainer>
          </Container>

          <Button type="submit">Submit</Button>
        </Formfield>
      )}
    </Formik>
  );
};
