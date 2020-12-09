import { takeLatest, call, put, all } from 'redux-saga/effects';

export function* updateProfile({ payload }) {
  const { firstName } = payload.data;

  const profile = Object.assign(
    {}
  )
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]);