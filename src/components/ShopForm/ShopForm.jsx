import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
// import { Map } from 'components/Map';
// import { useJsApiLoader } from '@react-google-maps/api';
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
import { ordersData } from 'services/ordersData';
// import { getformData } from 'redux/formData/formDataSelectors';
import { DishCounter } from '../DishCounter/DishCounter';

// const API_KEY = process.env.REACT_APP_API_KEY;

export const ShopForm = () => {
  const [totalPrice, setTotalPrice] = useState(null);
  const [totalPriceObj, setTotalPriceObj] = useState({});
  const [ordersObj, setOrdersObj] = useState({});

  const orders = useSelector(getOrderValue);

  useEffect(() => {
    const entries = Object.entries(totalPriceObj);
    let objQuantity = {};
    let objValue = {};
    for (const entrie of entries) {
      objQuantity[entrie[0]] = entrie[1].orderQuantity;
      if (entrie[1].orderValue !== 0) {
        objValue[entrie[0]] = entrie[1].orderValue;
      }
    }

    setOrdersObj({ ...objValue });
    const values = Object.values(objQuantity);

    const sum = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalPrice(sum);
  }, [totalPriceObj]);

  const handleSubmit = (values, { resetForm }) => {
    const data = {
      ...values,
      ordersObj,
      totalPrice: totalPrice,
      shopName: 'Mac',
    };
    ordersData(data);
    setTotalPriceObj({});
    // resetForm();
  };

  const handlePriceChange = price => {
    setTotalPriceObj(prevState => {
      return { ...prevState, ...price };
    });
  };

  // const defaultCenter = {
  //   lat: -3.745,
  //   lng: -38.523,
  // };

  // const libraries = ['places'];

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: API_KEY,
  //   libraries,
  // });

  return (
    <>
      {/* {isLoaded ? <Map center={defaultCenter} /> : <h2>Map</h2>} */}
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
    </>
  );
};
