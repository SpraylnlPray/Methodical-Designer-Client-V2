import { TOGGLE_MOBILE_START_MENU_VISIBILITY } from './actionTypes';

export const toggleMobileMenuVisibility = (): IVisibilityAction => {
  return {
    type: TOGGLE_MOBILE_START_MENU_VISIBILITY,
  };
};
