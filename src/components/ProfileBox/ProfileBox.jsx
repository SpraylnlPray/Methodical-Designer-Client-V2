import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleEditProfileVisibility as toggleVisibility } from '../../actions';
import Modal from '../Modal/Modal';
import EditProfileModal from './EditProfileModal';

// todo: Try with differen viewport sizes, and to make desktop go to home
// when it accesses mobile path
const ProfileBox = (props) => {
  const { isVisible, toggleVisibility } = props;

  const history = useHistory();

  const handleLogOut = (e) => {
    e.stopPropagation();
    history.push('/');
  };

  return (
    <div>
      <Modal isOpen={isVisible} toggleVisibility={toggleVisibility}>
        <EditProfileModal toggleVisibility={toggleVisibility} />
      </Modal>
      <div className='box ml-3'>
        <div className='is-flex is-justify-content-space-between'>
          <h3 className='title is-3'>Your Profile</h3>
          <button className='button is-danger' onClick={handleLogOut}>
            Log Out
          </button>
        </div>
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
                  <strong className='is-size-4'>John Smith</strong>
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
                <i className='fas fa-2x fa-user-edit' aria-hidden='true'></i>
              </span>
            </a>
          </div>
        </article>
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

export default connector(ProfileBox);
