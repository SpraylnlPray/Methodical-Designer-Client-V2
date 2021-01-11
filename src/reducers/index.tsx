import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import startMenuVisibilityReducer from './startMenuVisibilityReducer';
import editProfileReducer from './editProfileReducer';
import mobileHomeReducer from './mobileHomeReducer';

export default combineReducers({
  form: formReducer,
  isStartMenuVisible: startMenuVisibilityReducer,
  editProfileStatus: editProfileReducer,
  mobileHomeStatus: mobileHomeReducer,
});
