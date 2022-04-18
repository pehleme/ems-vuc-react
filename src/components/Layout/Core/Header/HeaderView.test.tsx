import React from "react";

import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Box } from "@mui/material";

import { HeaderViewCore } from "./HeaderView";

describe("ExampleComponentView", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HeaderViewCore />);
    expect(wrapper.matchesElement(<Box />)).toBeTruthy();
  });
});
