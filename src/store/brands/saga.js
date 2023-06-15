import { put, takeLeading } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import brandAPI from 'apis/brand/brandAPI';

import { apiErrorHandler } from 'utils/index';

import axiosClient from 'utils/axios';

import {
  GET_ALL_BRANDS,
  GET_USER_BRAND,
  CREATE_BRAND,
  APPROVE_BRAND,
  DECLINE_BRAND,
} from './actionTypes';

import {
  actionGetAllBrandsSuccess,
  actionGetAllBrandsFailed,
  actionGetUserBrandSuccess,
  actionGetUserBrandFailed,
  actionCreateBrandSuccess,
  actionCreateBrandFailed,
  actionApproveBrandSuccess,
  actionApproveBrandFailed,
  actionDeclineBrandSuccess,
  actionDeclineBrandFailed,
} from './actions';

function* getAllBrands() {
  try {
    const response = yield brandAPI.getAllBrands();
    yield put(actionGetAllBrandsSuccess(response.data.list));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetAllBrandsFailed());
  }
}

function* getUserBrand(action) {
  try {
    const response = yield brandAPI
      .getUserBrand(action.payload);
    yield put(actionGetUserBrandSuccess(response.data));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetUserBrandFailed());
  }
}

function* createBrand(action) {
  try {
    const response = yield brandAPI.createBrand(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionCreateBrandSuccess(response));
    } else {
      toast.error(response.message);
      yield put(actionCreateBrandFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionCreateBrandFailed());
  }
}

function* approveBrand(action) {
  try {
    const accessToken = localStorage.getItem('token');
    axiosClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = yield brandAPI.approveBrand(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionApproveBrandSuccess(response));
    } else {
      toast.error(response.message);
      yield put(actionApproveBrandFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionApproveBrandFailed());
  }
}

function* declineBrand(action) {
  try {
    const accessToken = localStorage.getItem('token');
    axiosClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = yield brandAPI.declineBrand(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionDeclineBrandSuccess(response));
    } else {
      toast.error(response.message);
      yield put(actionDeclineBrandFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionDeclineBrandFailed());
  }
}

export default function* BrandsSaga() {
  yield takeLeading(GET_ALL_BRANDS, getAllBrands);
  yield takeLeading(GET_USER_BRAND, getUserBrand);
  yield takeLeading(CREATE_BRAND, createBrand);
  yield takeLeading(APPROVE_BRAND, approveBrand);
  yield takeLeading(DECLINE_BRAND, declineBrand);
}
