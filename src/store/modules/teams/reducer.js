import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  teamModalOpen: false,
  active: null,
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@teams/GET_TEAMS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@teams/SELECT_TEAM': {
        draft.active = action.payload.team;
        break;
      }
      case '@teams/OPEN_TEAM_MODAL': {
        draft.teamModalOpen = true;
        break;
      }
      case '@teams/CLOSE_TEAM_MODAL': {
        draft.teamModalOpen = false;
        break;
      }
      case '@teams/CREATE_TEAM_SUCCESS': {
        draft.data.push(action.payload.team);
        break;
      }
      default:
    }
  });
}
