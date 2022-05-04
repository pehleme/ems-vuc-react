import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { HeaderView } from "./HeaderView.component";

describe("HeaderView component", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<HeaderView />);
    expect(wrapper).toBeTruthy();
  });
});
