import {
  GET_MARKET_PLACE,
  GET_MARKET_PLACE_SUCCESS,
  GET_MARKET_PLACE_FAILED,
  SELL_NFT,
  SELL_NFT_SUCCESS,
  SELL_NFT_FAILED,
  BUY_NFT,
  BUY_NFT_SUCCESS,
  BUY_NFT_FAILED,
} from './actionTypes';

export const actionGetMarketPlace = () => ({
  type: GET_MARKET_PLACE,
});

export const actionGetMarketPlaceSuccess = (payload) => ({
  type: GET_MARKET_PLACE_SUCCESS,
  payload,
});

export const actionGetMarketPlaceFailed = () => ({
  type: GET_MARKET_PLACE_FAILED,
});

export const actionSellNFT = (payload) => ({
  type: SELL_NFT,
  payload,
});

export const actionSellNFTSuccess = (payload) => ({
  type: SELL_NFT_SUCCESS,
  payload,
});

export const actionSellNFTFailed = () => ({
  type: SELL_NFT_FAILED,
});

export const actionBuyNFT = (payload) => ({
  type: BUY_NFT,
  payload,
});

export const actionBuyNFTSuccess = (payload) => ({
  type: BUY_NFT_SUCCESS,
  payload,
});

export const actionBuyNFTFailed = () => ({
  type: BUY_NFT_FAILED,
});
