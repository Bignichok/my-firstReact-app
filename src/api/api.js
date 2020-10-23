import Axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "97a59665-8234-4da3-8f8f-77eb6f3dc993";

const instance = Axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": API_KEY,
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((resp) => resp.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then((resp) => resp.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((resp) => resp.data);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
};

export const authAPI = {
  authUser() {
    return instance.get(`auth/me`);
  },
  loginUser() {
    return instance.post(`auth/login`);
  },
  logoutUser() {
    return instance.delete(`auth/login`);
  },
};
