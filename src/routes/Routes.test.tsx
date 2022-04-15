import { BrowserRouter as Router } from "react-router-dom";

import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Routes } from "./Routes";

describe("Routes", () => {
  it("renders snapshots", () => {
    const wrapper = shallow(
      <Router>
        <Routes />
      </Router>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
