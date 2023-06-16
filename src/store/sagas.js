import { all, fork } from 'redux-saga/effects';

import LoginSaga from 'store/auth/login/saga';
import BrandsSaga from 'store/brands/saga';
import CollectionsSaga from 'store/collections/saga';
import MarketPlaceSaga from 'store/marketplace/saga';

export default function* rootSaga() {
  yield all([
    fork(LoginSaga),

    fork(BrandsSaga),
    fork(CollectionsSaga),
    fork(MarketPlaceSaga),
  ]);
}
