export const getUsers = (state) => {
  return state.usersPage.get('users');
};
export const getPageSize = (state) => {
  return state.usersPage.get('pageSize');
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.get('totalUsersCount')
};
export const getCurrentPage = (state) => {
  return state.usersPage.get('currentPage');
};
export const getIsFetching = (state) => {
  return state.usersPage.get('isFetching');
};
export const getFollowingInProgress = (state) => {
  return state.usersPage.get('followingInProgress');
};
