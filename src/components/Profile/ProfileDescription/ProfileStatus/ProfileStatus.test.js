import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test status");
  });

  test("status span should be displayed after rendering", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("status span should contain right text", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("test status");
  });

  test("set input edit mode", () => {
    const component = create(<ProfileStatus status="test status" />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("test status");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="test status" updateUserStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
