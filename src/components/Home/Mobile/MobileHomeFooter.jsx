import React from 'react';

const MobileHomeFooter = ({ setSelectedCategory }) => {
  return (
    <div className='columns is-mobile has-background-black-ter m-0'>
      <div className='column is-flex is-justify-content-center'>
        <span
          className='icon is-medium has-text-light'
          onClick={() => setSelectedCategory('')}
        >
          <i className='fas fa-lg fa-home'></i>
        </span>
      </div>
      <div
        className='column is-flex is-justify-content-center'
        onClick={() => setSelectedCategory('profile')}
      >
        <span className='icon is-medium has-text-light'>
          <i className='fas fa-lg fa-user'></i>
        </span>
      </div>
      <div className='column is-flex is-justify-content-center'>
        <span className='icon is-medium has-text-light'>
          <i className='fas fa-lg fa-search'></i>
        </span>
      </div>
      <div className='column is-flex is-justify-content-center'>
        <span className='icon is-medium has-text-light'>
          <i className='fas fa-lg fa-plus'></i>
        </span>
      </div>
    </div>
  );
};

export default MobileHomeFooter;
