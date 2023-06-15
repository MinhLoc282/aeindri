import { put, takeLeading } from 'redux-saga/effects';

import mediaAPI from 'apis/media/mediaAPI';

import { apiErrorHandler } from 'utils/index';

import {
  UPLOAD_IMAGE,
} from './actionTypes';

import {
  actionUploadImageSuccess,
  actionUploadImageFailed,
} from './actions';

function* uploadImage(action) {
  try {
    const response = yield mediaAPI
      .uploadImage(action.payload);
    yield put(actionUploadImageSuccess(response.data));
  } catch (error) {
    apiErrorHandler(error);
    yield put(actionUploadImageFailed());
  }
}

export default function* BrandsSaga() {
  yield takeLeading(UPLOAD_IMAGE, uploadImage);
}
