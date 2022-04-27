import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { HeaderView } from "./HeaderView";

describe("ExampleComponentView", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HeaderView />);
    expect(wrapper.text()).toBeTruthy();
  });
});
