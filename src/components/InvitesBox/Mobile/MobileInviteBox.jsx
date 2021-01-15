import React from 'react';

import InviteBoxInfo from '../InviteBoxInfo';

const MobileInviteBox = () => {
  return (
    <div className='box py-2 px-4 mt-2'>
      <InviteBoxInfo />
      <div className='divider home-card-separator mt-2' />
      <div className='is-flex is-justify-content-space-between mt-2'>
        <button className='button is-primary'>Accept</button>
        <button className='button is-secondary'>More</button>
        <button className='button is-danger'>Decline</button>
      </div>
    </div>
  );
};

export default MobileInviteBox;
