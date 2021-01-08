import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, HomeSection, Process, FeatureCard, OrangeStrip } from '../../components';


function Home() {
  return (
    <>
      <HomeSection />
      <OrangeStrip />
      <Process />
      <FeatureCard/>
      <Pricing />
    </>
  );
}

export default Home;
