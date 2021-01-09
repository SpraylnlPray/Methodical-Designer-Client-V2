import React from 'react';
import InviteBox from './InviteBox/InviteBox';

const InvitesBox = () => {
  return (
    <div
      className='tile box p-0 ml-3 mr-0 mt-4 has-background-grey-lighter is-vertical'
      style={{ overflowY: 'auto' }}
    >
      <h2 className='title is-3 mt-1 mb-0 ml-3'>
        <u>Invites</u>
      </h2>
      <div
        className='is-flex is-flex-wrap-wrap is-justify-content-center mb-3 mt-3'
        style={{
          width: '100%',
          overflowY: 'auto',
        }}
      >
        <InviteBox />
        <InviteBox />
        <InviteBox />
        <InviteBox />
      </div>
    </div>
  );
};

export default InvitesBox;
