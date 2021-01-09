import {
  TOGGLE_MOBILE_START_MENU_VISIBILITY,
  TOGGLE_EDIT_PROFILE_VISIBILITY,
} from './actionTypes';

export const toggleMobileMenuVisibility = (): IVisibilityAction => {
  return {
    type: TOGGLE_MOBILE_START_MENU_VISIBILITY,
  };
};

export const toggleEditProfileVisibility = (): any => {
  return {
    type: TOGGLE_EDIT_PROFILE_VISIBILITY,
  };
};
