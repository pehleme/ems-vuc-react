import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { FooterView } from "./FooterView";

describe("FooterView component", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<FooterView />);
    expect(wrapper).toMatchSnapshot();
  });
});
