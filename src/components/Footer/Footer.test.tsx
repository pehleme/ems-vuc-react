import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Footer } from "./Footer";
import { FooterView } from "./FooterView";

describe("Footer component", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.type()).toBe(FooterView);
  });
});
