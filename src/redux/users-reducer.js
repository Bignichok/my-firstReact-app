import { usersAPI } from "../api/api";
// import { updateObjectInArray } from "../utils/object-helpers";
import { fromJS } from "immutable";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

// const initialState = {
//   users: [],
//   pageSize: 20,
//   totalUsersCount: 0,
//   currentPage: 1,
//   isFetching: false,
//   followingInProgress: [],
// };
// export const usersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FOLLOW:
//       return {
//         ...state,
//         users: updateObjectInArray(state.users, action.userId, "id", { followed: true }),
//       };

//     case UNFOLLOW:
//       return {
//         ...state,
//         users: updateObjectInArray(state.users, action.userId, "id", { followed: false }),
//       };

//     case SET_USERS:
//       return { ...state, users: [...action.users] };

//     case SET_CURRENT_PAGE:
//       return { ...state, currentPage: action.currentPage };

//     case SET_TOTAL_USERS_COUNT:
//       return { ...state, totalUsersCount: action.totalUsersCount };

//     case TOGGLE_IS_FETCHING:
//       return { ...state, isFetching: action.isFetching };

//     case TOGGLE_IS_FOLLOWING_PROGRESS:
//       return {
//         ...state,
//         followingInProgress: action.isFetching
//           ? [...state.followingInProgress, action.userId]
//           : state.followingInProgress.filter((id) => id !== action.userId),
//       };

//     default:
//       return state;
//   }
// };

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (page, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(page, pageSize).then((data) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId);
  if (response.resultCode === 0) {
    console.log(actionCreator(userId));
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const followThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      followSuccess
    );
  };
};
export const unFollowThunkCreator = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(usersAPI),
      unfollowSuccess
    );
  };
};

const initialState = fromJS({
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
});

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return state.update("users", (users) =>
        users.map((user) => {
          return user.get("id") === action.userId
            ? user.set("followed", true)
            : user;
        })
      );

    case UNFOLLOW:
      return state.update("users", (users) =>
        users.map((user) =>
          user.get("id") === action.userId ? user.set("followed", false) : user
        )
      );

    case SET_USERS:
      return state.set("users", fromJS(action.users));

    case SET_CURRENT_PAGE:
      return state.set("currentPage", action.currentPage);

    case SET_TOTAL_USERS_COUNT:
      return state.set("totalUsersCount", action.totalUsersCount);

    case TOGGLE_IS_FETCHING:
      return state.set("isFetching", action.isFetching);

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return state.update("followingInProgress", (followingInProgress) => {
        console.log(followingInProgress.size);
        console.log(action);

        if (action.isFetching) {
          return followingInProgress.push(action.userId);
        } else {
          followingInProgress.push(action.userId);
          return followingInProgress.filter((id) => id !== action.userId);
        }
      });

    default:
      return state;
  }
};
