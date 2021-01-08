import React from 'react';
import MobileHomeHeader from './MobileHomeHeader';
import MobileProjectsBox from '../ProjectsBox/MobileProjectsBox';
import MobileHomeFooter from './MobileHomeFooter';
import './Home.css';

const MobileHome = () => {
  return (
    <div className='is-flex is-flex-direction-column'>
      <MobileHomeHeader />

      <div className='is-flex-grow-2 is-flex is-flex-direction-column is-align-items-center'>
        <span className='pt-5 is-size-4 has-text-weight-medium mb-3'>
          Welcome Back XYZ!
        </span>

        <span className='has-text-weight-medium is-size-5 mt-4'>Projects</span>
        <div className='divider home-section-separator mt-1' />
        <MobileProjectsBox />
      </div>

      <MobileHomeFooter />
    </div>
  );
};

export default MobileHome;
