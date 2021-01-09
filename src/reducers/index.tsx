import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import startMenuVisibilityReducer from './startMenuVisibilityReducer';
import editProfileReducer from './editProfileReducer';

export default combineReducers({
  form: formReducer,
  isStartMenuVisible: startMenuVisibilityReducer,
  editProfileStatus: editProfileReducer,
});
