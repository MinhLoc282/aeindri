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
  REMOVE_NFT,
  REMOVE_NFT_SUCCESS,
  REMOVE_NFT_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  marketPlace: [],
};

const marketPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKET_PLACE:
      return {
        ...state,
        loading: true,
      };
    case GET_MARKET_PLACE_SUCCESS:
      return {
        ...state,
        loading: false,
        marketPlace: action.payload,
      };

    case GET_MARKET_PLACE_FAILED:
      return {
        ...state,
        loading: false,
        marketPlace: initialState.marketPlace,
      };

    case SELL_NFT:
      return {
        ...state,
        loading: true,
      };

    case SELL_NFT_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SELL_NFT_FAILED:
      return {
        ...state,
        loading: false,
      };

    case BUY_NFT:
      return {
        ...state,
        loading: true,
      };

    case BUY_NFT_SUCCESS:
      return {
        ...state,
        loading: false,
        marketPlace: state.marketPlace.filter((nft) => nft.id !== action.payload.id),
      };

    case BUY_NFT_FAILED:
      return {
        ...state,
        loading: false,
      };

    case REMOVE_NFT:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_NFT_SUCCESS:
      return {
        ...state,
        loading: false,
        marketPlace: state.marketPlace.filter(
          (collection) => collection.contract.address !== action.payload.address
            || collection.tokenId !== action.payload.tokenId,
        ),
      };

    case REMOVE_NFT_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default marketPlaceReducer;
