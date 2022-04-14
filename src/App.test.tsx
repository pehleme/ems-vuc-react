import App from "~/App";
import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
