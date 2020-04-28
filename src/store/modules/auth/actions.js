export function initCheckSuccess() {
  return {
    type: '@auth/INIT_CHECK_SUCCESS',
  };
}

export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function getPermissionsSuccess(roles, permissions) {
  return {
    type: '@auth/GET_PERMISSIONS_SUCESS',
    payload: { roles, permissions },
  };
}
