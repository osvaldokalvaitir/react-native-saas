import { all } from 'redux-saga/effects';

import auth, { init } from './auth/sagas';
import teams from './teams/sagas';
import projects from './projects/sagas';
import members from './members/sagas';

export default function* rootSaga() {
  return yield all([init(), auth, teams, projects, members]);
}
