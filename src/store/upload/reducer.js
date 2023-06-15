import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  image: null,
};

const brands = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload,
      };

    case UPLOAD_IMAGE_FAILED:
      return {
        ...state,
        loading: false,
        image: initialState.image,
      };

    default:
      return state;
  }
};

export default brands;
