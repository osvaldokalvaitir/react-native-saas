import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import {
  getProjectsSuccess,
  createProjectSuccess,
  closeProjectModal,
} from './actions';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  yield put(getProjectsSuccess(response.data));
}

export function* createProject({ payload }) {
  const { title } = payload;

  try {
    const response = yield call(api.post, 'projects', { title });

    yield put(createProjectSuccess(response.data));
    yield put(closeProjectModal());
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
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProject),
]);
