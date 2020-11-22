import React from "react";
import { create } from "react-test-renderer";
import Pagination from "./Pagination";

describe("pagination component test", () => {
  test("buttons renders", () => {
    const component = create(
      <Pagination currentPage={1} totalUsersCount={500} pageSize={20} />
    );
    const root = component.root;
    const buttons = root.findAllByType("button");
    expect(buttons.length).not.toBe(0);
  });

  test("pages count more than 5 but should be showed only 5 and first and last button", () => {
    const component = create(
      <Pagination currentPage={3} totalUsersCount={50} pageSize={5} />
    );
    const root = component.root;
    const buttons = root.findAllByType("button");
    expect(buttons.length).toBe(7);
  });
});
