import { takeLatest, call, put, all } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import { getMembersSuccess } from './actions';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  yield put(getMembersSuccess(response.data));
}

export function* updateMember({ payload }) {
  const { id, roles } = payload;

  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Membro atualizado',
        message: 'O membro foi atualizado com sucesso',
      })
    );
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

export function* inviteMember({ payload }) {
  const { email } = payload;

  try {
    yield call(api.post, 'invites', { invites: [email] });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Convite enviado',
        message: 'Enviamos um convite ao usuário para participar do time',
      })
    );
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
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBER_REQUEST', updateMember),
  takeLatest('@members/INVITE_MEMBER_REQUEST', inviteMember),
]);
