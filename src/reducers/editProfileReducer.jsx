import { TOGGLE_EDIT_PROFILE_VISIBILITY } from '../actions/actionTypes';

let initState = {
  isOpen: false,
};

const editProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_PROFILE_VISIBILITY:
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};

export default editProfileReducer;
