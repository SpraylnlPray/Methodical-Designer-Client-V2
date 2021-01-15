import React from 'react';

const MobileProfileInfo = ({ toggleVisibility }) => {
  return (
    <article className='media px-5'>
      <div className='media-left'>
        <figure className='image is-128x128'>
          <img
            src='https://bulma.io/images/placeholders/128x128.png'
            alt='Image'
          />
        </figure>
      </div>
      <div className='is-flex' style={{ width: '100%' }}>
        <div className='media-content'>
          <div className='content'>
            <p>
              <strong className='is-size-5'>John Smith</strong>
              <br />
              <strong>
                <u>
                  <small>Email</small>
                </u>
              </strong>
              <br />
              jsmith@gmail.com
              <br />
              <strong>
                <u>
                  <small>Last Login</small>
                </u>
              </strong>
              <br />
              20.11.2020
            </p>
          </div>
        </div>
        <a
          className='level-item is-align-self-flex-end is-justify-self-end'
          aria-label='like'
        >
          <span className='icon is-large' onClick={toggleVisibility}>
            <i
              className='fas fa-lg fa-user-edit mt-3 mr-4'
              aria-hidden='true'
            ></i>
          </span>
        </a>
      </div>
    </article>
  );
};

export default MobileProfileInfo;
