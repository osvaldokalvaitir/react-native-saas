import produce from 'immer';

const INITIAL_STATE = {
  authChecked: false,
  signedIn: false,
  token: null,
  roles: [],
  permissions: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signedIn = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signedIn = false;
        break;
      }
      case '@auth/GET_PERMISSIONS_SUCESS': {
        draft.roles = action.payload.roles;
        draft.permissions = action.payload.permissions;
        break;
      }
      default:
    }
  });
}
