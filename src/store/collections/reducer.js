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
} from './actionTypes';

const initialState = {
  loading: false,
  collections: [],
  myCollections: [],
};

const collections = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COLLECTIONS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload,
      };

    case GET_ALL_COLLECTIONS_FAILED:
      return {
        ...state,
        loading: false,
        collections: initialState.collections,
      };

    case GET_USER_COLLECTIONS:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_COLLECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: action.payload,
      };

    case GET_USER_COLLECTIONS_FAILED:
      return {
        ...state,
        loading: false,
        collections: initialState.collections,
      };

    case GET_MY_COLLECTION:
      return {
        ...state,
        loading: true,
      };

    case GET_MY_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        myCollections: action.payload,
      };

    case GET_MY_COLLECTION_FAILED:
      return {
        ...state,
        loading: false,
        myCollections: initialState.myCollections,
      };

    case CREATE_COLLECTION:
      return {
        ...state,
        loading: true,
      };

    case CREATE_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case CREATE_COLLECTION_FAILED:
      return {
        ...state,
        loading: false,
      };

    case APPROVE_COLLECTION:
      return {
        ...state,
        loading: true,
      };

    case APPROVE_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: state.collections.map((collection) => {
          if (collection._id === action.payload) {
            return { ...collection, approved: true };
          }
          return collection;
        }),
      };

    case APPROVE_COLLECTION_FAILED:
      return {
        ...state,
        loading: false,
      };

    case DECLINE_COLLECTION:
      return {
        ...state,
        loading: true,
      };

    case DECLINE_COLLECTION_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: state.collections.filter((collection) => collection._id !== action.payload),
      };

    case DECLINE_COLLECTION_FAILED:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_COLLECTION_ADDRESS:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_COLLECTION_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        collections: state.collections.map((collection) => {
          if (collection._id === action.payload.id) {
            return { ...collection, collectionAddress: action.payload.collectionAddress };
          }
          return collection;
        }),
      };

    case UPDATE_COLLECTION_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default collections;
