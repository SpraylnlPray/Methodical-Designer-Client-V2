import React from 'react';

const InviteBox = () => {
  return (
    <div className='tile is-child box'>
      <div>
        <article className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img
                src='https://bulma.io/images/placeholders/64x64.png'
                alt='Image'
              />
            </figure>
          </div>
          <div
            className='is-flex is-flex-direction-column'
            style={{ width: '100%' }}
          >
            <div className='is-flex'>
              <div className='media-content is-size-5'>
                <strong>Kristin Watson</strong>
              </div>
              <span className='icon is-medium'>
                <i className='fas fa-info-circle' />
              </span>
            </div>
            <div className='divider home-card-separator' />A brief project
            description to inform the invited user
          </div>
        </article>
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
