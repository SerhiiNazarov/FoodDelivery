import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  Formfield,
  Input,
  Label,
  Button,
  DishContainer,
  UserContainer,
} from './ShopForm.styled';

import { DishList } from '../DishList/DishList';

export const ShopForm = () => {
  const handleSubmit = ({ name, phone, email, address }, { resetForm }) => {};

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
            <DishList />
          </DishContainer>
        </Container>
        <Button type="submit">Submit</Button>
      </Formfield>
    </Formik>
  );
};
