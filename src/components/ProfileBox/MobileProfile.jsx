import React from 'react';
import { connect } from 'react-redux';

import { toggleEditProfileVisibility as toggleVisibility } from '../../actions';
import Modal from '../Modal/Modal';
import '../Home/Home.css';
import EditProfileModal from './EditProfileModal';

const MobileProfile = (props) => {
  const { isVisible, toggleVisibility } = props;
  return (
    <div className='is-flex-grow-2'>
      <Modal isOpen={isVisible} toggleVisibility={toggleVisibility}>
        <EditProfileModal toggleVisibility={toggleVisibility} />
      </Modal>
      <div className='mx-5 mt-5'>
        <div className='is-flex is-justify-content-space-between'></div>
        <article className='media'>
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
                  className='fas fa-2x fa-user-edit mt-3 mr-4'
                  aria-hidden='true'
                ></i>
              </span>
            </a>
          </div>
        </article>
        <div className='divider home-section-separator mt-4 has-background-grey-light	' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.editProfileStatus.isOpen,
  };
};

const mapDispatchToProps = {
  toggleVisibility,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(MobileProfile);
