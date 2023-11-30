import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Title } from './SharedLoyaut.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Title>Food Delivery</Title>
        <nav>
          <Link to="/" end>
            Shopping Page
          </Link>
          <Link to="shopingCard">Order</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
