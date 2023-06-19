import {
  GET_ALL_BRANDS,
  GET_ALL_BRANDS_SUCCESS,
  GET_ALL_BRANDS_FAILED,
  GET_USER_BRAND,
  GET_USER_BRAND_SUCCESS,
  GET_USER_BRAND_FAILED,
  CREATE_BRAND,
  CREATE_BRAND_SUCCESS,
  CREATE_BRAND_FAILED,
  APPROVE_BRAND,
  APPROVE_BRAND_SUCCESS,
  APPROVE_BRAND_FAILED,
  DECLINE_BRAND,
  DECLINE_BRAND_SUCCESS,
  DECLINE_BRAND_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  brands: [],
};

const brands = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.payload,
      };

    case GET_ALL_BRANDS_FAILED:
      return {
        ...state,
        loading: false,
        brands: initialState.brands,
      };

    case GET_USER_BRAND:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: [action.payload],
      };

    case GET_USER_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: initialState.brands,
      };

    case CREATE_BRAND:
      return {
        ...state,
        loading: true,
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
      };

    case APPROVE_BRAND:
      return {
        ...state,
        loading: true,
      };

    case APPROVE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: state.brands.map((brand) => {
          if (brand._id === action.payload) {
            return { ...brand, approved: true };
          }
          return brand;
        }),
      };

    case APPROVE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
      };

    case DECLINE_BRAND:
      return {
        ...state,
        loading: true,
      };

    case DECLINE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: state.brands.filter((brand) => brand._id !== action.payload),
      };

    case DECLINE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default brands;
