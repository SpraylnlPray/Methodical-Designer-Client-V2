import {
  TOGGLE_MOBILE_START_MENU_VISIBILITY,
  TOGGLE_EDIT_PROFILE_VISIBILITY,
  CHANGE_MOBILE_HOME_CATEGORY,
} from './actionTypes';

export const toggleMobileMenuVisibility = (): IEmptyAction => {
  return {
    type: TOGGLE_MOBILE_START_MENU_VISIBILITY,
  };
};

export const toggleEditProfileVisibility = (): IEmptyAction => {
  return {
    type: TOGGLE_EDIT_PROFILE_VISIBILITY,
  };
};

export const changeMobileHomeCategory = (newCategory: string): any => {
  return {
    type: CHANGE_MOBILE_HOME_CATEGORY,
    payload: { newCategory },
  };
};
