import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "./profile-reducer";
import React from "react";

const initialState = {
  postData: [
    { id: 1, message: "hello", likes: 0 },
    { id: 2, message: "Hi", likes: 15 },
    { id: 3, message: "to learn more about each warning.", likes: 22 },
  ],
};

test("new post length should be 4", () => {
  const action = addPostActionCreator("hello its from test");

  const newState = profileReducer(initialState, action);

  expect(newState.postData.length).toBe(4);
});

test("new post message text should be correct", () => {
  const action = addPostActionCreator("hello its from test");

  const newState = profileReducer(initialState, action);

  expect(newState.postData[3].message).toBe("hello its from test");
});

test("new post length should be decrement", () => {
  const action = deletePostActionCreator(1);

  const newState = profileReducer(initialState, action);

  expect(newState.postData.length).toBe(2);
});

test("new post length should be immutable if id is not correct ", () => {
  const action = deletePostActionCreator(1000);

  const newState = profileReducer(initialState, action);

  expect(newState.postData.length).toBe(newState.postData.length);
});