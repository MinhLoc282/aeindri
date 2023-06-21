import { put, takeLeading } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import marketplaceAPI from 'apis/marketplace/marketplaceAPI';

import { apiErrorHandler } from 'utils/index';

import {
  GET_MARKET_PLACE,
  SELL_NFT,
  BUY_NFT,
  REMOVE_NFT,
} from './actionTypes';

import {
  actionGetMarketPlaceSuccess,
  actionGetMarketPlaceFailed,
  actionSellNFTSuccess,
  actionSellNFTFailed,
  actionBuyNFTSuccess,
  actionBuyNFTFailed,
  actionRemoveNftSuccess,
  actionRemoveNftFailed,
} from './actions';

function* getMarketPlace() {
  try {
    const response = yield marketplaceAPI.getMarketPlace();
    yield put(actionGetMarketPlaceSuccess(response.data.list));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetMarketPlaceFailed());
  }
}

function* sellNFT(action) {
  try {
    const response = yield marketplaceAPI.sellNFT(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionSellNFTSuccess(action.payload));
    } else {
      toast.error(response.message);
      yield put(actionSellNFTFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionSellNFTFailed());
  }
}

function* buyNFT(action) {
  try {
    const response = yield marketplaceAPI.buyNFT(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionBuyNFTSuccess(action.payload));
    } else {
      toast.error(response.message);
      yield put(actionBuyNFTFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionBuyNFTFailed());
  }
}

function* removeNft(action) {
  try {
    yield put(actionRemoveNftSuccess(action.payload));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionRemoveNftFailed());
  }
}

export default function* CollectionSaga() {
  yield takeLeading(GET_MARKET_PLACE, getMarketPlace);
  yield takeLeading(SELL_NFT, sellNFT);
  yield takeLeading(BUY_NFT, buyNFT);
  yield takeLeading(REMOVE_NFT, removeNft);
}
