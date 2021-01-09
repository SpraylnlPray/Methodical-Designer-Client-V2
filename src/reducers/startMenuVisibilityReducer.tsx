import { TOGGLE_MOBILE_START_MENU_VISIBILITY } from '../actions/actionTypes';

let initVal: boolean = false;

const startMenuVisibilityReducer = (
  state = initVal,
  action: IVisibilityAction
): boolean => {
  switch (action.type) {
    case TOGGLE_MOBILE_START_MENU_VISIBILITY:
      let isMenuVisible = !state;
      return isMenuVisible;
    default:
      return state;
  }
};

export default startMenuVisibilityReducer;
