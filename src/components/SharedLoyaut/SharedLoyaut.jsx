import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Link,
  Title,
  LinkWrapper,
} from './SharedLoyaut.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Title>Food Delivery</Title>
        <LinkWrapper>
          <Link to="/" end>
            Shopping Page
          </Link>
          <Link to="shopingCard">Shopping List</Link>
        </LinkWrapper>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
