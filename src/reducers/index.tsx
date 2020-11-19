import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import startMenuVisibilityReducer from './startMenuVisibilityReducer';

export default combineReducers({
  form: formReducer,
  isStartMenuVisible: startMenuVisibilityReducer,
});
