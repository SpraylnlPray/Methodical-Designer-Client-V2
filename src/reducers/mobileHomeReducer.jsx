import { CHANGE_MOBILE_HOME_CATEGORY } from '../actions/actionTypes';

let initState = {
  selectedCategory: '',
};

const mobileHomeReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_MOBILE_HOME_CATEGORY:
      return { ...state, selectedCategory: action.payload.newCategory };
    default:
      return state;
  }
};

export default mobileHomeReducer;
