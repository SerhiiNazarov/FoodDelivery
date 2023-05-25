import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ShopsPage } from '../pages/ShopsPage/ShopPage';
import { ShopingCard } from '../pages/ShopingCard/ShopingCard';
import { SharedLayout } from '../components/SharedLoyaut/SharedLoyaut';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ShopsPage />} />
        <Route path="shopingCard" element={<ShopingCard />} />
      </Route>
    </Routes>
  );
};
