import { usersAPI } from "../api/api";
import {fromJS} from 'immutable'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";



export const follow = (userId) => {
  return { type: FOLLOW, userId };
};
export const unfollow = (userId) => {
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

export const followThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.followUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(follow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
};

export const unFollowThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  usersAPI.unfollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollow(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });
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
      return state.update('users', users=> users.map((user)=>{
        console.log(user)
        return user.id === action.userId ? user.set('followed', true) : user
      }));
      // return {
      //   ...state,
      //   users: state.users.map((user) =>
      //     user.id === action.userId ? { ...user, followed: true } : user
      //   ),
      // };

    case UNFOLLOW:
      return state.update('users', users => users.map((user)=>user.id === action.userId ? user.set('followed', false) : user));
      // return {
      //   ...state,
      //   users: state.users.map((user) =>
      //     user.id === action.userId ? { ...user, followed: false } : user
      //   ),
      // };

    case SET_USERS:
      return state.set('users', fromJS(action.users))
      // return { ...state, users: [...action.users] };

    case SET_CURRENT_PAGE:
      return state.set('currentPage',action.currentPage)
      // return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return state.set('totalUsersCount', action.totalUsersCount)
      // return { ...state, totalUsersCount: action.totalUsersCount };

    case TOGGLE_IS_FETCHING:
      return state.set('isFetching', action.isFetching)
      // return { ...state, isFetching: action.isFetching };

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return  state.update('followingInProgress', followingInProgress=>{
        console.log(followingInProgress.size)
        if(followingInProgress.size){
          console.log(1)
          return followingInProgress.push(action.userId);
        } else {
          console.log(2)
          return followingInProgress.filter((id) => id !== action.userId)
        }
      })
        
        
        

        
      // return {
      // ...state,
      // followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter((id) => id !== action.userId),
      // };

    default:
      return state;
  }
};