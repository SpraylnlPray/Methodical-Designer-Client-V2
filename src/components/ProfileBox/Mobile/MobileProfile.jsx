import React from 'react';
import { connect } from 'react-redux';

import { toggleEditProfileVisibility as toggleVisibility } from '../../../actions';
import Modal from '../../Modal/Modal';
import MobileProfileInfo from './MobileProfileInfo';
import MobileInvitesBox from '../../InvitesBox/Mobile/MobileInvitesBox';
import EditProfileModal from '../EditProfileModal';
import '../../Home/Home.css';

const MobileProfile = (props) => {
  const { isVisible, toggleVisibility } = props;
  return (
    <div
      className='is-flex-grow-2 is-flex is-flex-direction-column'
      style={{ height: '100%', overflowY: 'hidden' }}
    >
      <Modal isOpen={isVisible} toggleVisibility={toggleVisibility}>
        <EditProfileModal toggleVisibility={toggleVisibility} />
      </Modal>
      <div
        className='pt-5 is-flex is-flex-direction-column is-justify-content-center'
        style={{ height: '100%' }}
      >
        <MobileProfileInfo toggleVisibility={toggleVisibility} />
        <div
          className='divider home-section-separator mt-4 has-background-grey-light'
          style={{ width: '95%', marginLeft: '2.5%' }}
        />
        <MobileInvitesBox />
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
