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

export const actionGetAllBrands = () => ({
  type: GET_ALL_BRANDS,
});

export const actionGetAllBrandsSuccess = (payload) => ({
  type: GET_ALL_BRANDS_SUCCESS,
  payload,
});

export const actionGetAllBrandsFailed = () => ({
  type: GET_ALL_BRANDS_FAILED,
});

export const actionGetUserBrand = (payload) => ({
  type: GET_USER_BRAND,
  payload,
});

export const actionGetUserBrandSuccess = (payload) => ({
  type: GET_USER_BRAND_SUCCESS,
  payload,
});

export const actionGetUserBrandFailed = () => ({
  type: GET_USER_BRAND_FAILED,
});

export const actionCreateBrand = (payload) => ({
  type: CREATE_BRAND,
  payload,
});

export const actionCreateBrandSuccess = (payload) => ({
  type: CREATE_BRAND_SUCCESS,
  payload,
});

export const actionCreateBrandFailed = () => ({
  type: CREATE_BRAND_FAILED,
});

export const actionApproveBrand = (payload) => ({
  type: APPROVE_BRAND,
  payload,
});

export const actionApproveBrandSuccess = (payload) => ({
  type: APPROVE_BRAND_SUCCESS,
  payload,
});

export const actionApproveBrandFailed = () => ({
  type: APPROVE_BRAND_FAILED,
});

export const actionDeclineBrand = (payload) => ({
  type: DECLINE_BRAND,
  payload,
});

export const actionDeclineBrandSuccess = (payload) => ({
  type: DECLINE_BRAND_SUCCESS,
  payload,
});

export const actionDeclineBrandFailed = () => ({
  type: DECLINE_BRAND_FAILED,
});
