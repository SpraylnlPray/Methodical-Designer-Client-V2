import React from 'react';
import InviteBox from './InviteBox/InviteBox';

const InvitesBox = () => {
  return (
    <div className='tile box p-0 is-ancestor ml-3 mr-0 mt-4 has-background-grey-lighter is-vertical'>
      <h2 className='title is-3 my-1 ml-3'>
        <u>Invites</u>
      </h2>
      <div className='tile is-4 is-parent' style={{ width: '100%' }}>
        <InviteBox />
      </div>
    </div>
  );
};

export default InvitesBox;
