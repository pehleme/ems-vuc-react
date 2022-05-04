import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import HomePage from "./Home.page";

describe("HomePage", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper).toBeTruthy();
  });
});
