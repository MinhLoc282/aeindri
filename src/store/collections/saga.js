import { put, takeLeading } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import collectionAPI from 'apis/collection/collectionAPI';

import { apiErrorHandler } from 'utils/index';

import axiosClient from 'utils/axios';

import {
  GET_ALL_COLLECTIONS,
  GET_USER_COLLECTIONS,
  CREATE_COLLECTION,
  APPROVE_COLLECTION,
  DECLINE_COLLECTION,
  GET_MY_COLLECTION,
  UPDATE_COLLECTION_ADDRESS,
} from './actionTypes';

import {
  actionGetAllCollectionsSuccess,
  actionGetAllCollectionsFailed,
  actionGetUserCollectionsSuccess,
  actionGetUserCollectionsFailed,
  actionGetMyCollectionSuccess,
  actionGetMyCollectionFailed,
  actionCreateCollectionSuccess,
  actionCreateCollectionFailed,
  actionApproveCollectionSuccess,
  actionApproveCollectionFailed,
  actionDeclineCollectionSuccess,
  actionDeclineCollectionFailed,
  actionUpdateCollectionAddressSuccess,
  actionUpdateCollectionAddressFailed,
} from './actions';

function* getAllCollections() {
  try {
    const response = yield collectionAPI.getAllCollections();
    yield put(actionGetAllCollectionsSuccess(response.data.list));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetAllCollectionsFailed());
  }
}

function* getUserCollections(action) {
  try {
    const response = yield collectionAPI
      .getUserCollections(action.payload);
    yield put(actionGetUserCollectionsSuccess(response.data.list));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetUserCollectionsFailed());
  }
}

function* getMyCollection(action) {
  try {
    const response = yield collectionAPI
      .getMyCollection(action.payload);
    yield put(actionGetMyCollectionSuccess(response.data.list));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionGetMyCollectionFailed());
  }
}

function* createCollection(action) {
  try {
    const response = yield collectionAPI.createCollection(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionCreateCollectionSuccess(response));
    } else {
      toast.error(response.message);
      yield put(actionCreateCollectionFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionCreateCollectionFailed());
  }
}

function* approveCollection(action) {
  try {
    const accessToken = localStorage.getItem('token');
    axiosClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = yield collectionAPI.approveCollection(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionApproveCollectionSuccess(action.payload));
    } else {
      toast.error(response.message);
      yield put(actionApproveCollectionFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionApproveCollectionFailed());
  }
}

function* declineCollection(action) {
  try {
    const accessToken = localStorage.getItem('token');
    axiosClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
    const response = yield collectionAPI.declineCollection(action.payload);
    if (response.success) {
      toast.success(response.message);
      yield put(actionDeclineCollectionSuccess(action.payload));
    } else {
      toast.error(response.message);
      yield put(actionDeclineCollectionFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionDeclineCollectionFailed());
  }
}

function* updateCollectionAddress(action) {
  try {
    const { id, collectionAddress } = action.payload;
    const response = yield collectionAPI.updateCollectionAddress({ id, collectionAddress });
    if (response.success) {
      toast.success(response.message);
      yield put(actionUpdateCollectionAddressSuccess(action.payload));
    } else {
      toast.error(response.message);
      yield put(actionUpdateCollectionAddressFailed());
    }
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionUpdateCollectionAddressFailed());
  }
}

export default function* CollectionsSaga() {
  yield takeLeading(GET_ALL_COLLECTIONS, getAllCollections);
  yield takeLeading(GET_USER_COLLECTIONS, getUserCollections);
  yield takeLeading(GET_MY_COLLECTION, getMyCollection);
  yield takeLeading(CREATE_COLLECTION, createCollection);
  yield takeLeading(APPROVE_COLLECTION, approveCollection);
  yield takeLeading(DECLINE_COLLECTION, declineCollection);
  yield takeLeading(UPDATE_COLLECTION_ADDRESS, updateCollectionAddress);
}
