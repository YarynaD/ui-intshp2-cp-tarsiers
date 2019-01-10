import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import Banner from '../Banner/Banner';
import AdvertisingArea from '../AdvertisingArea/AdvertisingArea';

const HomePage = () => (
  <div className="col-9 slider__wrapper">
    <Promotions />
    <JoinUs />
    <AdvertisingArea />
    <Banner />
  </div>
);

export default HomePage;
