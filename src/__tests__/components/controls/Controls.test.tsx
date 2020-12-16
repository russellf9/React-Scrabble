import * as React from "react";
import { shallow } from "enzyme";
import { Controls, ControlsProps } from "../../../components/controls/Controls";
import { Button } from "../../../components/shared";

const initialProps: ControlsProps = {
  clearSearch: (): void => {
    return;
  },
  isLoading: false,
};

describe("Controls", () => {
  it("renders without crashing", () => {
    // given
    // when
    const wrapper = shallow(<Controls {...initialProps} />);

    // then
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a Button", () => {
    // given
    // when
    const wrapper = shallow(<Controls {...initialProps} />);

    // then
    expect(wrapper.contains(<Button />));
  });

  it("should not be loading and the button should not be disabled", () => {
    // given
    const wrapper = shallow(<Controls {...initialProps} />);

    // when
    const button = wrapper.find(Button);

    // then
    expect(button).toBeTruthy();
    expect(button.props()["disabled"]).toBe(false);
  });
});
