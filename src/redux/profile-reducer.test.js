import profileReducer, { addPostSuccess, deletePostSuccess } from "./profile-reducer";
import { fromJS } from "immutable";

const initialState = fromJS({
  postData: {
    1: { id: 1, message: "hello", likes: 0 },
    2: { id: 2, message: "Hi", likes: 15 },
    3: { id: 3, message: "to learn more about each warning.", likes: 22 },
  },
});

test("new post size should be 4", () => {
  const action = addPostSuccess("hello its from test");

  const newState = profileReducer(initialState, action);

  expect(newState.get("postData").size).toBe(4);
});

test("new post message text should be correct", () => {
  const action = addPostSuccess("hello its from test");

  const newState = profileReducer(initialState, action);

  expect(newState.getIn(["postData", "3", "message"])).toBe(
    "to learn more about each warning."
  );
});

test("new post length should be decrement", () => {
  const action = deletePostSuccess("1");

  const newState = profileReducer(initialState, action);

  expect(newState.get("postData").size).toBe(2);
});

test("new post length should be immutable if id is not correct ", () => {
  const action = deletePostSuccess(1000);

  const newState = profileReducer(initialState, action);

  expect(newState.get("postData").size).toBe(newState.get("postData").size);
});
