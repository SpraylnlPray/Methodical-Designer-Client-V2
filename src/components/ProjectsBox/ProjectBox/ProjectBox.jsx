import React from 'react';

const ProjectBox = () => {
  return (
    <div className='my-2 mx-2'>
      <div className='tile is-child box'>
        <div>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64 mt-2'>
                <img
                  src='https://bulma.io/images/placeholders/64x64.png'
                  alt='Imagee'
                />
              </figure>
            </div>
            <div
              className='is-flex is-flex-direction-column'
              style={{ width: '100%' }}
            >
              <div className='is-flex'>
                <div className='media-content is-size-5 has-text-weight-medium'>
                  Lorem, ipsum.
                </div>
                <span className='icon is-medium'>
                  <i className='fas fa-trash' />
                </span>
              </div>
              <div className='is-flex'>
                <p
                  className='pt-0 is-size-7 media-content'
                  style={{ width: '90%' }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus repellendus atque reiciendis dicta modi.
                </p>
                <span className='icon is-medium mt-1'>
                  <i className='fas fa-chevron-right'></i>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
