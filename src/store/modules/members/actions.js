export function getMembersRequest() {
  return {
    type: '@members/GET_MEMBERS_REQUEST',
  };
}

export function getMembersSuccess(data) {
  return {
    type: '@members/GET_MEMBERS_SUCCESS',
    payload: { data },
  };
}

export function updateMemberRequest(id, roles) {
  return {
    type: '@members/UPDATE_MEMBER_REQUEST',
    payload: {
      id,
      roles,
    },
  };
}

export function inviteMemberRequest(email) {
  return {
    type: '@members/INVITE_MEMBER_REQUEST',
    payload: {
      email,
    },
  };
}

export function openMembersModal() {
  return {
    type: '@members/OPEN_MEMBERS_MODAL',
  };
}

export function closeMembersModal() {
  return {
    type: '@members/CLOSE_MEMBERS_MODAL',
  };
}
