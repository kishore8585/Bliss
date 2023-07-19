import React from 'react';
import Delivery from '../components/Delivery/Delivery';
import Shop from '../components/Shop/Shop';
import Winter from '../components/Winter/Winter';
import SwiperDiv from '../components/SwiperDiv/SwiperDiv';
import Bright from '../components/Bright/Bright';
import LearnMore from '../components/LearnMore/LearnMore';
import PerfectParings from '../components/PerfectPairings/PerfectParings';

const Middle = () => {
  return (
    <>
      <SwiperDiv />
      <Winter />
      <Delivery />
      <Shop />
      <LearnMore />
      <Bright />
      <PerfectParings />
    </>
  )
};

export default Middle