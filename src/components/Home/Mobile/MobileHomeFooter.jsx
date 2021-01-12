import React from 'react';

const MobileHomeFooter = ({ setSelectedCategory, selectedCategory }) => {
  const activeClass = 'has-text-light';
  const inactiveClass = 'has-text-grey';
  return (
    <div className='columns is-mobile has-background-black-ter m-0'>
      <div className='column is-flex is-justify-content-center'>
        <span
          className={`icon is-medium ${
            selectedCategory === '' ? activeClass : inactiveClass
          }`}
          onClick={() => setSelectedCategory('')}
        >
          <i className='fas fa-lg fa-home'></i>
        </span>
      </div>
      <div
        className='column is-flex is-justify-content-center'
        onClick={() => setSelectedCategory('profile')}
      >
        <span
          className={`icon is-medium ${
            selectedCategory === 'profile' ? activeClass : inactiveClass
          }`}
        >
          <i className='fas fa-lg fa-user'></i>
        </span>
      </div>
      <div className='column is-flex is-justify-content-center'>
        <span
          className={`icon is-medium ${
            selectedCategory === 'search' ? activeClass : inactiveClass
          }`}
        >
          <i className='fas fa-lg fa-search'></i>
        </span>
      </div>
      <div className='column is-flex is-justify-content-center'>
        <span
          className={`icon is-medium ${
            selectedCategory === 'add' ? activeClass : inactiveClass
          }`}
        >
          <i className='fas fa-lg fa-plus'></i>
        </span>
      </div>
    </div>
  );
};

export default MobileHomeFooter;
