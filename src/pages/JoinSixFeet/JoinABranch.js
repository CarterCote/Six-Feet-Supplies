import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function JoinABranch() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Pricing />

    </>
  );
}

export default JoinABranch;
