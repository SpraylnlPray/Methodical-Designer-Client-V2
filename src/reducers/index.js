import { combineReducers } from 'redux';

const someReducer = (data = null, action) => {
  switch (action.type) {
    default:
      break;
  }

  return data;
};

export default combineReducers({
  someReducer,
});
