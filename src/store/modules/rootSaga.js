import { all, fork } from 'redux-saga/effects';

import auth, { getPermissions } from './auth/sagas';
// import teams from './teams/sagas';
// import projects from './projects/sagas';
// import members from './members/sagas';

export default function* rootSaga() {
  return yield all([
    // fork(getPermissions),
    auth,
    // , teams, projects, members
  ]);
}
