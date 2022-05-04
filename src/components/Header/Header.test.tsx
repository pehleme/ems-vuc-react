import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Header } from "./Header.component";
import { HeaderView } from "./HeaderView.component";

describe("Header component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).toBe(HeaderView);
  });
});
