import {  Map } from "immutable";

export const getPostData=(state)=> state.profilePage.get("postData", Map());

export const getProfile = (state)=> state.profilePage.get('profile',null);

export const getStatus = (state)=> state.profilePage.get('status', '');
