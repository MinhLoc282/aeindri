import {
  GET_ALL_COLLECTIONS,
  GET_ALL_COLLECTIONS_SUCCESS,
  GET_ALL_COLLECTIONS_FAILED,
  GET_USER_COLLECTIONS,
  GET_USER_COLLECTIONS_SUCCESS,
  GET_USER_COLLECTIONS_FAILED,
  GET_MY_COLLECTION,
  GET_MY_COLLECTION_SUCCESS,
  GET_MY_COLLECTION_FAILED,
  CREATE_COLLECTION,
  CREATE_COLLECTION_SUCCESS,
  CREATE_COLLECTION_FAILED,
  APPROVE_COLLECTION,
  APPROVE_COLLECTION_SUCCESS,
  APPROVE_COLLECTION_FAILED,
  DECLINE_COLLECTION,
  DECLINE_COLLECTION_SUCCESS,
  DECLINE_COLLECTION_FAILED,
  UPDATE_COLLECTION_ADDRESS,
  UPDATE_COLLECTION_ADDRESS_SUCCESS,
  UPDATE_COLLECTION_ADDRESS_FAILED,
  REMOVE_COLLECTION,
  REMOVE_COLLECTION_SUCCESS,
  REMOVE_COLLECTION_FAILED,
} from './actionTypes';

export const actionGetAllCollections = () => ({
  type: GET_ALL_COLLECTIONS,
});

export const actionGetAllCollectionsSuccess = (payload) => ({
  type: GET_ALL_COLLECTIONS_SUCCESS,
  payload,
});

export const actionGetAllCollectionsFailed = () => ({
  type: GET_ALL_COLLECTIONS_FAILED,
});

export const actionGetUserCollections = (payload) => ({
  type: GET_USER_COLLECTIONS,
  payload,
});

export const actionGetUserCollectionsSuccess = (payload) => ({
  type: GET_USER_COLLECTIONS_SUCCESS,
  payload,
});

export const actionGetUserCollectionsFailed = () => ({
  type: GET_USER_COLLECTIONS_FAILED,
});

export const actionGetMyCollection = (payload) => ({
  type: GET_MY_COLLECTION,
  payload,
});

export const actionGetMyCollectionSuccess = (payload) => ({
  type: GET_MY_COLLECTION_SUCCESS,
  payload,
});

export const actionGetMyCollectionFailed = () => ({
  type: GET_MY_COLLECTION_FAILED,
});

export const actionCreateCollection = (payload) => ({
  type: CREATE_COLLECTION,
  payload,
});

export const actionCreateCollectionSuccess = (payload) => ({
  type: CREATE_COLLECTION_SUCCESS,
  payload,
});

export const actionCreateCollectionFailed = () => ({
  type: CREATE_COLLECTION_FAILED,
});

export const actionApproveCollection = (payload) => ({
  type: APPROVE_COLLECTION,
  payload,
});

export const actionApproveCollectionSuccess = (payload) => ({
  type: APPROVE_COLLECTION_SUCCESS,
  payload,
});

export const actionApproveCollectionFailed = () => ({
  type: APPROVE_COLLECTION_FAILED,
});

export const actionDeclineCollection = (payload) => ({
  type: DECLINE_COLLECTION,
  payload,
});

export const actionDeclineCollectionSuccess = (payload) => ({
  type: DECLINE_COLLECTION_SUCCESS,
  payload,
});

export const actionDeclineCollectionFailed = () => ({
  type: DECLINE_COLLECTION_FAILED,
});

export const actionUpdateCollectionAddress = (payload) => ({
  type: UPDATE_COLLECTION_ADDRESS,
  payload,
});

export const actionUpdateCollectionAddressSuccess = (payload) => ({
  type: UPDATE_COLLECTION_ADDRESS_SUCCESS,
  payload,
});

export const actionUpdateCollectionAddressFailed = () => ({
  type: UPDATE_COLLECTION_ADDRESS_FAILED,
});

export const actionRemoveCollection = (payload) => ({
  type: REMOVE_COLLECTION,
  payload,
});

export const actionRemoveCollectionSuccess = (payload) => ({
  type: REMOVE_COLLECTION_SUCCESS,
  payload,
});

export const actionRemoveCollectionFailed = () => ({
  type: REMOVE_COLLECTION_FAILED,
});
