import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { showToast } from "../../../ui-lib/toast";

import { signInSucess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, passwordKey } = payload;

    const response = yield call(api.post, 'login', {
      email,
      passwordKey
    });

    const { bearer, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${bearer}`;

    yield put(signInSucess(bearer, user));

    history.push('/profile');
    showToast({ type: "success", message: `Bem vindo, ${response.data.user.firstName}` });

    if (bearer === null) {
      history.push('/');
    }

  } catch (err) {
    showToast({ type: "error", message: 'Falha no login, verifique seus dados' });
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { bearer } = payload.auth;

  if (bearer) {
    api.defaults.headers['Authorization'] = `Bearer ${bearer}`;
  } else {
    history.push('/');
  }
}

export function* signUp({ payload }) {
  try {
    const { firstName, lastName, email, passwordKey } = payload;

    yield call(api.post, 'sign-in', {
      firstName,
      lastName,
      email,
      passwordKey
    });

    history.push('/login')
  } catch (err) {
    showToast({ type: "error", message: 'Falha no cadastro, tente novamente' });

    yield put(signFailure());
  }
}

export function* signOut() {
  try {
    yield call(api.get, 'logout/');

    history.push('/login');
  } catch (err) {

    yield put(signFailure());
  }
}


export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);