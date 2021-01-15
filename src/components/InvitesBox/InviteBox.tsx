import React from 'react';

import InviteBoxInfo from './InviteBoxInfo';

const InviteBox = () => {
  return (
    <div className='box my-2 mx-2'>
      <div>
        <InviteBoxInfo />
        <div className='divider home-card-separator mt-3' />
        <div className='is-flex is-justify-content-space-evenly mt-4'>
          <button className='button is-primary'>Accept</button>
          <button className='button is-secondary'>More</button>
          <button className='button is-danger'>Decline</button>
        </div>
      </div>
    </div>
  );
};

export default InviteBox;
