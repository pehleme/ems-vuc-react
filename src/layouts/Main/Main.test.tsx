import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { MainLayout } from "./Main.layout";

describe("Main Layout", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<MainLayout />);
    expect(wrapper).toBeTruthy();
  });
});
