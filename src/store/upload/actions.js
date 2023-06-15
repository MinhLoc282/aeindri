import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILED,
} from './actionTypes';

export const actionUploadImage = (payload) => ({
  type: UPLOAD_IMAGE,
  payload,
});

export const actionUploadImageSuccess = (payload) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload,
});

export const actionUploadImageFailed = () => ({
  type: UPLOAD_IMAGE_FAILED,
});
