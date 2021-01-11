import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import MobileHomeHeader from './MobileHomeHeader';
import MobileProjectsBox from '../../ProjectsBox/MobileProjectsBox';
import MobileProfile from './MobileProfile';
import MobileHomeFooter from './MobileHomeFooter';
import '../Home.css';

const MobileHome = () => {
  let match = useRouteMatch();

  return (
    <div
      className='is-flex is-flex-direction-column'
      style={{ height: '100%' }}
    >
      <MobileHomeHeader />

      <Switch>
        <Route exact path={`${match.path}/`}>
          <div
            className='is-flex-grow-2 is-flex is-flex-direction-column is-align-items-center'
            style={{ overflowY: 'hidden' }}
          >
            <span className='pt-5 is-size-4 has-text-weight-medium mb-3'>
              Welcome Back XYZ!
            </span>

            <span className='has-text-weight-medium is-size-5 mt-4'>
              Projects
            </span>
            <div className='divider home-section-separator mt-1' />
            <MobileProjectsBox />
          </div>
        </Route>
        <Route path={`${match.path}/profile`}>
          <MobileProfile />
        </Route>
      </Switch>

      <MobileHomeFooter match={match} />
    </div>
  );
};

export default MobileHome;
