import { Container, Title } from './Order.styled';
import { BackBtn } from 'components/BackBtn';

export const Order = () => {
  return (
    <Container>
      <BackBtn link="/shopingCard" />
      <Title>Your order is in progress</Title>
    </Container>
  );
};
