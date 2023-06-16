import { combineReducers } from 'redux';

import Login from 'store/auth/login/reducer';
import Brands from 'store/brands/reducer';
import Collections from 'store/collections/reducer';
import MarketPlaces from 'store/marketplace/reducer';

const rootReducer = combineReducers({
  Login,

  Brands,
  Collections,
  MarketPlaces,
});

export default rootReducer;
