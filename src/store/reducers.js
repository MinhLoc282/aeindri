import { combineReducers } from 'redux';

import Login from 'store/auth/login/reducer';
import Brands from 'store/brands/reducer';
import Collections from 'store/collections/reducer';

const rootReducer = combineReducers({
  Login,

  Brands,
  Collections,
});

export default rootReducer;
