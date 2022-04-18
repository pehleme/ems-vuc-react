import React from "react";

import { shallow } from "enzyme";
import { describe, expect, it } from "vitest";

import { Box } from "@mui/material";

import { HeaderView } from "./HeaderView";

describe("ExampleComponentView", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<HeaderView />);
    expect(wrapper.matchesElement(<Box />)).toBeTruthy();
  });
});
