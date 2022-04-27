import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Header } from "./Header";
import { HeaderView } from "./HeaderView";

describe("Header component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).toBe(HeaderView);
  });
});
