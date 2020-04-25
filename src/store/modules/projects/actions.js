export function getProjectsRequest() {
  return {
    type: '@projects/GET_PROJECTS_REQUEST',
  };
}

export function getProjectsSuccess(data) {
  return {
    type: '@projects/GET_PROJECTS_SUCCESS',
    payload: { data },
  };
}

export function createProjectRequest(title) {
  return {
    type: '@projects/CREATE_PROJECT_REQUEST',
    payload: { title },
  };
}

export function createProjectSuccess(project) {
  return {
    type: '@projects/CREATE_PROJECT_SUCCESS',
    payload: { project },
  };
}

export function openProjectModal() {
  return {
    type: '@projects/OPEN_PROJECT_MODAL',
  };
}

export function closeProjectModal() {
  return {
    type: '@projects/CLOSE_PROJECT_MODAL',
  };
}
