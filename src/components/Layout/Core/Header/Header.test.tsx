import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { HeaderCore } from "./Header";
import { HeaderViewCore } from "./HeaderView";

describe("ExampleComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HeaderCore />);
    expect(wrapper.type()).toBe(HeaderViewCore);
  });
});
