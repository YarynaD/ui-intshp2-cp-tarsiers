import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import AdvertisingArea from '../AdvertisingArea/AdvertisingArea';
import ProductContainer from '../ProductContainer/ProductContainer';

const HomePage = () => (
  <>
    <Promotions />
    <ProductContainer />
    <JoinUs />
    <AdvertisingArea />
  </>
);

export default HomePage;
