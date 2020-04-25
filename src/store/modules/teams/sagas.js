import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import { getTeamsSuccess, createTeamSuccess, closeTeamModal } from './actions';
import { getPermissions } from '../auth/sagas';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  yield put(getTeamsSuccess(response.data));
}

export function* createTeam({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.post, 'teams', { name });

    yield put(createTeamSuccess(response.data));
    yield put(closeTeamModal());
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Erro na operação',
        message: 'Houve um erro, tente novamente!',
      })
    );
  }
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@teams/SELECT_TEAM', getPermissions),
]);
