import React from 'react';

import MobileInviteBox from './MobileInviteBox';

const MobileInvitesBox = () => {
  return (
    <div
      className='is-flex is-flex-direction-column is-align-items-center'
      style={{ overflowY: 'auto' }}
    >
      <u className='is-spaced is-size-4'>Invites</u>
      <p className='is-6'>Projects people want to share with you.</p>
      <div
        style={{ overflowY: 'auto', width: '100%' }}
        className='is-flex is-justify-content-center is-flex-wrap-wrap is-flex mb-3 mt-1'
      >
        <MobileInviteBox />
        <MobileInviteBox />
        <MobileInviteBox />
        <MobileInviteBox />
      </div>
    </div>
  );
};

export default MobileInvitesBox;
