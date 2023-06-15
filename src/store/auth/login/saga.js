import { toast } from 'react-toastify';
import { put, takeLeading } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';
import axiosClient from 'utils/axios';

import { LOGIN } from './actionTypes';
import {
  actionLoginSuccess,
  actionLoginFailed,
} from './actions';

function* login({ payload }) {
  try {
    const {
      values: {
        email,
        password,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      email,
      password,
    });

    const response = yield authAPI.login(newData);

    localStorage.setItem('token', response.accessToken);

    yield put(actionLoginSuccess());

    toast.success(response.message);

    axiosClient.defaults.headers.Authorization = response;

    callback();
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionLoginFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(LOGIN, login);
}
