import React from 'react';

import { changeMobileHomeCategory } from '../../../actions/';

import MobileHomeHeader from './MobileHomeHeader';
import MobileProjectsBox from '../../ProjectsBox/MobileProjectsBox';
import MobileProfile from '../../ProfileBox/Mobile/MobileProfile';
import MobileHomeFooter from './MobileHomeFooter';
import '../Home.css';
import { connect } from 'react-redux';

const MobileHomeStart = () => {
  return (
    <div
      className='is-flex-grow-2 is-flex is-flex-direction-column is-align-items-center'
      style={{ overflowY: 'hidden' }}
    >
      <span className='pt-5 is-size-4 has-text-weight-medium mb-3'>
        Welcome Back XYZ!
      </span>

      <span className='has-text-weight-medium is-size-5 mt-4'>Projects</span>
      <div className='divider home-section-separator mt-1' />
      <MobileProjectsBox />
    </div>
  );
};

const MobileHome = (props: any) => {
  const { selectedCategory, setSelectedCategory } = props;
  const centerComponent = () => {
    switch (selectedCategory) {
      case '':
        return MobileHomeStart();
      case 'profile':
        return <MobileProfile />;
      default:
        return <div>Error!!</div>;
    }
  };

  return (
    <div
      className='is-flex is-flex-direction-column'
      style={{ height: '100%' }}
    >
      <MobileHomeHeader />

      {centerComponent()}

      <MobileHomeFooter
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    selectedCategory: state.mobileHomeStatus.selectedCategory,
  };
};

const mapDispatchToProps = {
  setSelectedCategory: changeMobileHomeCategory,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(MobileHome);
