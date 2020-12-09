export function signInRequest(email, passwordKey) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, passwordKey }
  };
}

export function signInSucess(bearer, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { bearer, user }
  };
}

export function signUpRequest(firstName, lastName, email, passwordKey) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { firstName, lastName, email, passwordKey }
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}