import React from 'react';
import Footer from '../components/common/Footer';
import NavBar from '../components/common/NavBar';
import { ComponentForCenterAlignment } from '../components/common/PublicStyle';
import StyledFollowComponent from '../components/follow/FollowComponent';

const Follow = () => {
  return (
    <>
      <NavBar />
      <ComponentForCenterAlignment>
        <StyledFollowComponent />
      </ComponentForCenterAlignment>
      <Footer />
    </>
  );
};

export default Follow;
