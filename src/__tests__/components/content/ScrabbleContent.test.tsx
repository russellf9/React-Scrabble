import * as React from "react";
import { shallow } from "enzyme";
import ScrabbleContent, {
  Wrapper,
} from "../../../components/content/ScrabbleContent";

describe("ScrabbleContent", () => {
  it("renders without crashing", () => {
    // given
    const wrapper = shallow(<ScrabbleContent />);

    // then
    expect(wrapper).toMatchSnapshot();
  });

  it("should have a Wrapper", () => {
    // given
    const wrapper = shallow(<ScrabbleContent />);

    // then
    expect(wrapper.contains(<Wrapper />));
  });
});
