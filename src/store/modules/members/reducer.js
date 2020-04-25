import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  membersModalOpen: false,
};

export default function members(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@members/GET_MEMBERS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@members/UPDATE_MEMBER_REQUEST': {
        const { id, roles } = action.payload;

        draft.data = draft.data.map(member =>
          member.id === id ? { ...member, roles } : member
        );

        break;
      }
      case '@members/OPEN_MEMBERS_MODAL': {
        draft.membersModalOpen = true;
        break;
      }
      case '@members/CLOSE_MEMBERS_MODAL': {
        draft.membersModalOpen = false;
        break;
      }
      default:
    }
  });
}
